
import { DrillDownService, IScraperDataSource, LocaleScraperDataSource, ScraperService } from '@univer-clipsheet-core/scraper';
import { getStorage, ISidePanelService, ReportPrintService, setAndPushStorage, SidePanelService, StorageService, WindowService } from '@univer-clipsheet-core/shared';
import type { IInitialSheet } from '@univer-clipsheet-core/table';
import { createEmptyInitialSheet, ITableDataSource, LocalTableDataSource, TableRecordTypeEnum, TableService, TableStorageKeyEnum } from '@univer-clipsheet-core/table';
import { IWorkflowDataSource, LocaleWorkflowDataSource, WorkflowService } from '@univer-clipsheet-core/workflow';
import { Injector } from '@wendellhu/redi';
import 'webextension-polyfill';
import { filterRowsByRemoveDuplicateRule } from './helper';
import { setTemplate } from './set-templates';

const injector = new Injector([
    [ReportPrintService],
    [TableService],
    [StorageService],
    [ScraperService],
    [DrillDownService],
    [WorkflowService],
    [WindowService],
    [ISidePanelService, { useFactory: () => new SidePanelService('sidepanel/index.html') }],
    [ITableDataSource, { useClass: LocalTableDataSource }],
    [IScraperDataSource, { useClass: LocaleScraperDataSource }],
    [IWorkflowDataSource, { useClass: LocaleWorkflowDataSource }],
]);

const tableService = injector.get(TableService);
const workflowService = injector.get(WorkflowService);
const windowService = injector.get(WindowService);

windowService.setWindowTemplatePath(chrome.runtime.getURL('/workflow-panel/workflow-window.html'));
injector.get(StorageService);
injector.get(DrillDownService);
injector.get(ScraperService);
injector.get(ISidePanelService);
injector.get(ReportPrintService);

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

chrome.runtime.onInstalled.addListener((detail) => {
    if (detail.reason === 'install') {
        chrome.tabs.create({ url: 'https://univer.ai/clip-sheet' });

        setTemplate(injector);
    }
});

