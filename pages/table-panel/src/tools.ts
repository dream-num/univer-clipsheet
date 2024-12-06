import type { IInitialSheet } from '@univer-clipsheet-core/table';

export function generateColumnNames(sheet: IInitialSheet) {
    const columnLength = Math.max(sheet.columnName.length, sheet.rows[0]?.cells.length);

    return Array.from({ length: columnLength }).map((_, columnIndex) => {
        const title = sheet.columnName[columnIndex] || `Column ${columnIndex + 1}`;
        return title;
    });
}
