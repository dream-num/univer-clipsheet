import { Injector } from '@wendellhu/redi';
import type { IMessage, PushStorageMessage, SetStorageMessage } from '@univer-clipsheet-core/shared';
import { ClipsheetMessageTypeEnum, IframeViewTypeEnum, listenPingSignal, PingSignalKeyEnum, promisifyMessage, requestDataSource, sendSetIframeViewMessage } from '@univer-clipsheet-core/shared';
import { ClientController, ClientViewService, CoverService, DetectTablesService, ElementInspectService, IframeViewController, RemountObserver, ScraperClientService, TableScrapingShadowComponent } from '@univer-clipsheet-core/ui';
import { startAjaxIntercept } from '@univer-clipsheet-core/ajax-intercept';
import type { IGetTableRecordsParams, IPreviewSheetStorageValue, ITableRecordsResponse } from '@univer-clipsheet-core/table';
import { ajaxJsonToTable, PreviewSheetFromEnum, TableDataSourceKeyEnum, TableStorageKeyEnum } from '@univer-clipsheet-core/table';

startAjaxIntercept(chrome.runtime.getURL('ajax-interceptor/index.iife.js'), (data) => {
    if (data) {
        // console.log('Ajax data', data);
        const sheets = ajaxJsonToTable([data]);
        // console.log('Ajax sheets', sheets);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const msg: IMessage<ClipsheetMessageTypeEnum.DomContentLoaded> = {
        type: ClipsheetMessageTypeEnum.DomContentLoaded,
    };

    chrome.runtime.sendMessage(msg);
});

window.addEventListener('load', () => {
    const msg: IMessage<ClipsheetMessageTypeEnum.Loaded> = {
        type: ClipsheetMessageTypeEnum.Loaded,
    };

    chrome.runtime.sendMessage(msg);
});

const injector = new Injector([
    [ElementInspectService],
    [TableScrapingShadowComponent],
    [IframeViewController],
    [CoverService],
    [DetectTablesService],
    [RemountObserver],
    [ClientController],
    [ScraperClientService],
    [ClientViewService],
]);

const iframeViewController = injector.get(IframeViewController);

iframeViewController.registerIframeView(IframeViewTypeEnum.WorkflowPanel, chrome.runtime.getURL('workflow-panel/index.html'));
iframeViewController.registerIframeView(IframeViewTypeEnum.TablePanel, chrome.runtime.getURL('table-panel/index.html'));
iframeViewController.registerIframeView(IframeViewTypeEnum.PreviewTablePanel, chrome.runtime.getURL('preview-table-panel/index.html'));

injector.get(ElementInspectService).listenMessage();
injector.get(CoverService).listenMessage();
injector.get(DetectTablesService).listenMessage();
injector.get(ClientController).listenMessage();
injector.get(ScraperClientService).listenMessage();

const clientViewService = injector.get(ClientViewService);

clientViewService.onViewScrapedDataClick(async (tableId) => {
    injector.get(TableScrapingShadowComponent).deactivate();

    const res = await requestDataSource<ITableRecordsResponse, IGetTableRecordsParams>(TableDataSourceKeyEnum.TableRecords, {
        page: 1,
        pageSize: 1,
        ids: [tableId],
    });
    const tableRecord = res.data[0];

    const msg: SetStorageMessage = {
        type: ClipsheetMessageTypeEnum.SetStorage,
        payload: {
            key: TableStorageKeyEnum.CurrentTableRecord,
            value: tableRecord,
        },
    };

    chrome.runtime.sendMessage(msg);
    sendSetIframeViewMessage(IframeViewTypeEnum.TablePanel);
});

listenPingSignal(PingSignalKeyEnum.DrillDownColumnFormShowed, () => {
    injector.get(CoverService).removeAllCovers();
    injector.get(ElementInspectService).shadowComponent.deactivate();
});
listenPingSignal(PingSignalKeyEnum.PopupShowed, () => {
    const detectTablesService = injector.get(DetectTablesService);
    detectTablesService.highlightElement$.next(undefined);
    detectTablesService.tableElements$.next([]);
});
listenPingSignal(PingSignalKeyEnum.ScraperFormShowed, () => {
    // console.log('ScraperFormShowed callback');
    chrome.runtime.sendMessage({
        type: ClipsheetMessageTypeEnum.GetStorage,
        payload: TableStorageKeyEnum.PreviewSheet,
    });

    promisifyMessage<PushStorageMessage<IPreviewSheetStorageValue>>((msg) => msg.type === ClipsheetMessageTypeEnum.PushStorage && msg.payload.key === TableStorageKeyEnum.PreviewSheet)
        .then((res) => {
            const value = res.payload.value;

            if (value?.from === PreviewSheetFromEnum.ScraperForm) {
                sendSetIframeViewMessage(IframeViewTypeEnum.None);
            }
        });
});

