import { Injector } from '@wendellhu/redi';
import type { IMessage } from '@univer-clipsheet-core/shared';
import { ClipsheetMessageTypeEnum, IframeDialogKeyEnum, listenPingSignal, PingSignalKeyEnum } from '@univer-clipsheet-core/shared';
import { ClientController, ClientViewService, CoverService, DetectTablesService, ElementInspectService, IframePanelShadowComponent, RemountObserver, ScraperClientChannelService, TableScrapingShadowComponent } from '@univer-clipsheet-core/ui';
// import type { GetIntelligenceColumnMessage, MessageItem, PushIntelligenceColumnMessage } from '@univer-clipsheet/shared';
// import { DataSourceKeys, joinUnitUrl, Message, MsgType, StorageKeys } from '@univer-clipsheet/shared';
import { startAjaxIntercept } from '@univer-clipsheet-core/ajax-intercept';
import { ajaxJsonToTable } from '@univer-clipsheet-core/table';
// import { fieldExtractionEvent } from './tools/field-extraction-events';

startAjaxIntercept(chrome.runtime.getURL('ajax-interceptor/index.iife.js'), (data) => {
    if (data) {
        // console.log('ajax data', data);
        const sheets = ajaxJsonToTable([data]);
        // console.log('ajax sheets', sheets);
    }
});

// console.log('content script loaded');
// function responseUpperElement(selector: string | null) {
//     chrome.runtime.sendMessage({
//         type: MsgType.ResponseUpperElement,
//         selector,
//     });
// }

// Run the ajax interceptor
// startInterceptAjax();

// Listen to the event of response of field extraction
// fieldExtractionEvent.listenRequest((detail) => {
//     const startTime = Date.now();

//     const request: Message[MsgType.RequestDrillDown] = {
//         type: MsgType.RequestDrillDown,
//         selectors: detail.selectors,
//         url: detail.url,
//     };

//     chrome.runtime.sendMessage(request);

//     const asyncResponse = subscribeMessage<Message[MsgType.ResponseDrillDown]>((msg) => msg.type === MsgType.ResponseDrillDown);
//     asyncResponse.then((res) => {
//         const interval = Date.now() - startTime;
//         setTimeout(() => {
//             fieldExtractionEvent.sendResponse({
//                 id: detail.id,
//                 url: detail.url,
//                 datum: res.items.map((item) => ({ selector: item.selector, text: item.value?.text ?? '' })),
//                 success: res.items.length > 0,
//             });
//         }, interval);
//     });
// });

window.addEventListener('DOMContentLoaded', () => {
    const msg: IMessage<ClipsheetMessageTypeEnum.DomContentLoaded> = {
        type: ClipsheetMessageTypeEnum.DomContentLoaded,
        // payload: null,
    };

    chrome.runtime.sendMessage(msg);

    // chrome.runtime.sendMessage({
    //     type: MsgType.TabDomLoaded,
    //     empty: Array.from(document.body.children).length <= 0,
    // } as Message[MsgType.TabDomLoaded]);
});

window.addEventListener('load', () => {
    const msg: IMessage<ClipsheetMessageTypeEnum.Loaded> = {
        type: ClipsheetMessageTypeEnum.Loaded,
        // payload: null,
    };

    chrome.runtime.sendMessage(msg);
    // chrome.runtime.sendMessage({
    //     type: MsgType.TabLoaded,
    // } as Message[MsgType.TabLoaded]);

    // if (['univer.plus', 'univer.ai'].some((postfix) => location.hostname.endsWith(postfix))) {
    //     fieldExtractionEvent.broadcastInstalled();
    //     setInterval(() => {
    //         fieldExtractionEvent.broadcastInstalled();
    //     }, 5000);
    // }
});

// Main content script
// chrome.runtime.onMessage.addListener(async (req: MessageItem) => {
//     const { type } = req;
//     // Receive request of extracting sheets data from popup
//     if (type === MsgType.RequestAllSheets) {
//         const collectedData = await extractSheetsFromPage(document);

//         sendPageMessage({
//             text: collectedData.text,
//             sheets: filterAndSortAllInitialSheet(collectedData.sheets),
//             tabId: req.tabId,
//             windowId: req.windowId,
//             recordType: RecordType.WholeSheet,
//         });
//     }

//     // if (type === MsgType.RequestTables) {
//     //     const bodyList = getBodyElements(document);
//     //     const msg: Message[MsgType.SendTables] = {
//     //         type: MsgType.SendTables,
//     //         tables: extractionTablesElementData(bodyList),
//     //         title: document.title,
//     //         originUrl: location.href,
//     //         time: req.time,
//     //         tabId: req.tabId,
//     //         windowId: req.windowId,
//     //         text: req.needText ? tableApproximationExtraction([document.body as HTMLBodyElement]).text : '',
//     //     };
//     //     chrome.runtime.sendMessage(msg);
//     // }

//     if (type === MsgType.ShowPopup) {
//         disposeAccurateExtraction();
//         disposeElementCopySelector();
//     }

//     if (type === MsgType.StartCopyElementSelector) {
//         activeElementCopySelector();
//     }

//     if (type === MsgType.RequestElementInspection) {
//         const ElementInspectService = injector.get(ElementInspectService);
//         ElementInspectService.activate();
//         ElementInspectService.onInspectElement((el) => {
//             chrome.runtime.sendMessage({
//                 type: MsgType.ResponseElementInspection,
//                 selector: getDrillDownSelector(el),
//                 lastOfSelector: generateUniqueSelectorLastOf(el),
//             });
//             ElementInspectService.deactivate();
//         });
//     }

//     if (type === MsgType.RequestUpperElement) {
//         const baseElement = findElementBySelector(req.selector);
//         if (!baseElement) {
//             responseUpperElement(null);
//             return;
//         }

//         const el = findUpperParent(baseElement);

//         responseUpperElement(el ? createDrillDownInfo(el).selector : null);
//     }

//     /** element inspecting */
//     if (type === MsgType.StartAccurateExtraction) {
//         activeAccurateExtraction();
//     }

//     if (type === MsgType.LogOut) {
//         disposeAccurateExtraction();
//         injector.get(WorkflowController).deactivate();
//     }

//     if (type === MsgType.RequestDrillDownColumnElementInspection) {
//         injector.get(DrillDownColumnService).activate();
//     }
//     if (type === MsgType.CloseDrillDownColumnElementInspection) {
//         injector.get(DrillDownColumnService).deactivate();
//     }

//     if (type === MsgType.ConnectChannel) {
//         const channelName = req.name;

//         if (isDrillDownChannelName(channelName)) {
//             injector.get(DrillDownChannelService).connect(channelName);
//         } else {
//             injector.get(ScraperTaskChannelService).connect(channelName);
//         }

//         chrome.runtime.sendMessage({
//             type: MsgType.ChannelConnected,
//             name: channelName,
//         });
//     }

//     if (type === MsgType.SendStorage) {
//         if (req.key === StorageKeys.WorkflowDialogVisible) {
//             const workflowController = injector.get(WorkflowController);
//             if (req.value) {
//                 if (workflowController.active) {
//                     return;
//                 }
//                 workflowController.activate();
//             } else {
//                 workflowController.deactivate();
//             }
//         }
//     }

//     if (type === MsgType.AddCover) {
//         const el = findElementBySelector(req.selector);
//         if (el) {
//             injector.get(CoverService).addCover(req.id, el);
//         }
//     }

//     if (type === MsgType.UpdateCover) {
//         const el = findElementBySelector(req.selector);
//         if (el) {
//             injector.get(CoverService).updateCover(req.id, el);
//         }
//     }

//     if (type === MsgType.RemoveCover) {
//         injector.get(CoverService).removeCover(req.id);
//     }

//     if (type === MsgType.RemoveAllCovers) {
//         injector.get(CoverService).removeAllCovers();
//     }
// });

// addPingSignalListener(PingSignalKeys.DrillDownColumnFormShowed, () => {
//     injector.get(CoverService).removeAllCovers();
//     injector.get(DrillDownColumnService).deactivate();
// });

// addPingSignalListener(PingSignalKeys.PopupShowed, () => {
//     const detectTablesService = injector.get(DetectTablesService);
//     detectTablesService.highlightElement$.next(undefined);
//     detectTablesService.tableElements$.next([]);
// });

const injector = new Injector([
    [ElementInspectService],
    [TableScrapingShadowComponent],
    [IframePanelShadowComponent],
    [CoverService],
    [DetectTablesService],
    [RemountObserver],
    [ClientController],
    [ScraperClientChannelService],
    [ClientViewService],
]);

const iframeShadowComponent = injector.get(IframePanelShadowComponent);

iframeShadowComponent.addIframeSrc(IframeDialogKeyEnum.WorkflowPanel, chrome.runtime.getURL('workflow-panel/index.html'));
iframeShadowComponent.addIframeSrc(IframeDialogKeyEnum.TablePanel, chrome.runtime.getURL('table-panel/index.html'));

injector.get(ElementInspectService).listenMessage();
injector.get(CoverService).listenMessage();
injector.get(DetectTablesService).listenMessage();
injector.get(ClientController).listenMessage();
injector.get(ScraperClientChannelService).listenMessage();

// const clientViewService = injector.get(ClientViewService);

// clientViewService.onCreateScraper(async (scraper, sheet) => {
//     // set intelligence columns when creating a scraper
//     setCurrentScraper({
//         ...scraper,
//         columns: [],
//     });

//     sendSetStorageMessage(UIStorageKeyEnum.ScraperFormTableLoading, true);

//     const uniqueId = generateRandomId();

//     const res = await requestDataSource<PushIntelligenceColumnMessage['payload']['value']>(DataSourceKeys.IntelligenceColumns, {
//         id: uniqueId,
//         rows: sheet.rows,
//     }, (msg) => msg.payload.value.id === uniqueId)
//         .finally(() => {
//             sendSetStorageMessage(UIStorageKeyEnum.ScraperFormTableLoading, false);
//         });

//     setCurrentScraper({
//         ...scraper,
//         columns: scraper.columns.map((column, columnIndex) => {
//             const name = res.cols[columnIndex].name;
//             if (!name) {
//                 return column;
//             }

//             return {
//                 ...column,
//                 name,
//             };
//         }),
//     });
// });

// clientViewService.onTableScraped(async (res) => {
//     // Table scraped success to show the link of navigating to univer sheet
//     const getBaseUrlMsg: GetStorageMessage = {
//         type: ClipsheetMessageTypeEnum.GetStorage,
//         payload: StorageKeys.BaseUrl,
//     };
//     chrome.runtime.sendMessage(getBaseUrlMsg);

//     const baseUrlRes = await promisifyMessage<PushStorageMessage<string>>((msg) => msg.type === ClipsheetMessageTypeEnum.PushStorage && msg.payload.key === StorageKeys.BaseUrl);
//     const link = joinUnitUrl(baseUrlRes.payload.value, res.id);

//     if (link) {
//         clientViewService.tableLink$.next(link);
//     }
// });

listenPingSignal(PingSignalKeyEnum.DrillDownColumnFormShowed, () => {
    injector.get(CoverService).removeAllCovers();
    injector.get(ElementInspectService).shadowComponent.deactivate();
});
listenPingSignal(PingSignalKeyEnum.PopupShowed, () => {
    const detectTablesService = injector.get(DetectTablesService);
    detectTablesService.highlightElement$.next(undefined);
    detectTablesService.tableElements$.next([]);
});

// chrome.runtime.onMessage.addListener(async (msg: MessageItem, sender) => {
//     const { type } = msg;
//     if (type === MsgType.LogOut) {
//         injector.get(IframePanelShadowComponent).deactivate();
//         injector.get(TableScrapingShadowComponent).deactivate();
//         injector.get(ElementInspectService).shadowComponent.deactivate();
//         injector.get(CoverService).removeAllCovers();
//     }
// });

