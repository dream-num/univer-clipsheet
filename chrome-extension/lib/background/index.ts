
import { DrillDownService, IScraperDataSource, LocaleScraperDataSource, ScraperService } from '@univer-clipsheet-core/scraper';
import { getStorage, ISidePanelService, setAndPushStorage, SidePanelService, StorageService } from '@univer-clipsheet-core/shared';
import type { IInitialSheet } from '@univer-clipsheet-core/table';
import { createEmptyInitialSheet, ITableDataSource, LocalTableDataSource, TableRecordTypeEnum, TableService, TableStorageKeyEnum } from '@univer-clipsheet-core/table';
import { IWorkflowDataSource, LocaleWorkflowDataSource, WorkflowService } from '@univer-clipsheet-core/workflow';
import { Injector } from '@wendellhu/redi';
import 'webextension-polyfill';
import { filterRowsByRemoveDuplicateRule } from './helper';

chrome.runtime.onInstalled.addListener((detail) => {
    if (detail.reason === 'install') {
        // setStorage(StorageKeys.ShowExpiredAlert, true);
        chrome.tabs.create({ url: 'https://univer.ai/clipsheet' });
    }
});

const injector = new Injector([
    [TableService],
    [StorageService],
    [ScraperService],
    [DrillDownService],
    [WorkflowService],
    [ISidePanelService, { useFactory: () => new SidePanelService('sidepanel/index.html') }],
    [ITableDataSource, { useClass: LocalTableDataSource }],
    [IScraperDataSource, { useClass: LocaleScraperDataSource }],
    [IWorkflowDataSource, { useClass: LocaleWorkflowDataSource }],
]);

const tableService = injector.get(TableService);
const workflowService = injector.get(WorkflowService);

tableService.listenMessage();
workflowService.listenMessage();
injector.get(StorageService).listenMessage();
injector.get(DrillDownService).listenMessage();
injector.get(ScraperService).listenMessage();
injector.get(ISidePanelService).listenMessage();
injector.get(WorkflowService).setWorkflowWindowPath(chrome.runtime.getURL('/workflow-panel/workflow-window.html'));

workflowService.onWorkflowDone(async (ctx) => {
    const { workflow, url, rows } = ctx;
    if (workflow.tableId) { // Workflow add incremental rows data to existing unit
        const sheets = (await getStorage<IInitialSheet[]>(TableStorageKeyEnum.TableSheetsPrefix + workflow.tableId)) ?? [];
        const sheet = sheets[0];
        if (!sheet) {
            return;
        }

        const filteredRows = filterRowsByRemoveDuplicateRule(sheet.rows, rows, workflow);
        if (filteredRows.length > 0) {
            sheet.rows = sheet.rows.concat(filteredRows);

            setAndPushStorage(TableStorageKeyEnum.TableSheetsPrefix + workflow.tableId, sheets);
        }
    } else {
        const initialSheet = createEmptyInitialSheet();

        initialSheet.sheetName = workflow.name;
        initialSheet.rows = rows;
        initialSheet.columnName = workflow.columns.map((c) => c.name);

        const tableId = await tableService.addTable({
            record: {
                recordType: TableRecordTypeEnum.WorkflowSheet,
                title: workflow.name,
                sourceUrl: url,
            },
            sheets: [initialSheet],
            text: '',
            triggerId: workflow.id,
        });

        if (tableId) {
            workflow.tableId = tableId;
            await workflowService.updateWorkflow(workflow);
        }
    }
});

workflowService.onWorkflowDone((ctx) => {
    // You can do something after the workflow is done
});

