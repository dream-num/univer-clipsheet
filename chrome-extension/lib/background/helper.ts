import type { ISheet_Row } from '@univer-clipsheet-core/table';
import { getCellValue } from '@univer-clipsheet-core/table';
import type { IWorkflow } from '@univer-clipsheet-core/workflow';
import { WorkflowRuleName } from '@univer-clipsheet-core/workflow';

function joinCells(strings: string[]) {
    return strings.join(' ').trim();
}

export function filterRowsByRemoveDuplicateRule(oldRows: ISheet_Row[], newRows: ISheet_Row[], workflow: IWorkflow) {
    const removeDuplicatesColumnIds = workflow.rules.find((rule) => rule.name === WorkflowRuleName.RemoveDuplicate)?.payload;

    if (!removeDuplicatesColumnIds || removeDuplicatesColumnIds.length <= 0) {
        return newRows;
    }

    const columnIndexes = removeDuplicatesColumnIds.map((columnId) => workflow.columns.findIndex((column) => column.id === columnId));

    const columnIndexSet = new Set(columnIndexes);

    const oldValues = oldRows.map((row) => row.cells.map((cell) => getCellValue(cell)));
    const oldStringKeySet = oldValues.reduce((set, rows) => {
        const key = joinCells(rows.filter((_, index) => columnIndexSet.has(index)));
        set.add(key);
        return set;
    }, new Set<string>());

    return newRows.filter((row) => {
        const strings = row.cells.map((cell) => getCellValue(cell));
        const stringKey = joinCells(strings.filter((_, index) => columnIndexSet.has(index)));

        return !oldStringKeySet.has(stringKey);
    });
}
