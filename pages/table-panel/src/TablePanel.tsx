import { t } from '@univer-clipsheet-core/locale';
import { IframeViewTypeEnum, sendSetIframeViewMessage } from '@univer-clipsheet-core/shared';
import type { IInitialSheet, ITableRecord } from '@univer-clipsheet-core/table';
import { getCellValue, TableStorageKeyEnum } from '@univer-clipsheet-core/table';
import { CloseGraySvg, InitialSheetView, linearGradientBackground, Link, useStorageValue, useSyncIframeRectEffect } from '@univer-clipsheet-core/ui';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { saveAs } from 'file-saver';

export const TablePanel = () => {
    const [currentTableRecord] = useStorageValue<ITableRecord | null>(TableStorageKeyEnum.CurrentTableRecord, null);

    const [tableRecordSheets] = useStorageValue<IInitialSheet[]>(TableStorageKeyEnum.TableSheetsPrefix + currentTableRecord?.id, []);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const [sheetIndex, setSheetIndex] = React.useState(0);
    const currentSheet = tableRecordSheets[sheetIndex];

    useSyncIframeRectEffect(containerRef);

    const exportAsCSV = () => {
        if (!currentSheet) {
            return;
        }
        const rows = currentSheet.rows;

        const wrapDoubleQuotes = (value: string) => `"${value}"`;
        const rowValues = rows.map((row) => row.cells.map(getCellValue));
        const csv = [currentSheet.columnName.map(wrapDoubleQuotes)].concat(rowValues)
            .map((row) => row.join(','))
            .join('\n');

        const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, `${currentTableRecord?.title}.csv`);
    };

    const tableScroll = useMemo(() => ({ x: 400, y: window.innerHeight - 214 }), []);

    return (
        <div ref={containerRef} className="rounded-2xl p-5 bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-lg">{currentTableRecord?.title}</h1>
                    <Link href={currentTableRecord?.sourceUrl ?? ''}>{t('OriginalLink')}</Link>
                </div>

                <button className={clsx('p-1 hover:bg-gray-100 rounded-sm')} onClick={() => sendSetIframeViewMessage(IframeViewTypeEnum.None)}>
                    <CloseGraySvg />
                </button>
            </div>

            <div className="flex items-center justify-between mt-3">
                <ul className="flex grow">
                    {tableRecordSheets.map((sheet, index) => {
                        return (
                            <li
                                key={index}
                                className={clsx('p-2 text-sm hover:bg-slate-100 cursor-pointer rounded')}
                                onClick={() => setSheetIndex(index)}
                            >
                                {`${t('Table')} ${index + 1}`}
                            </li>
                        );
                    })}
                </ul>

            </div>

            {currentSheet && <div><InitialSheetView rounded sheet={currentSheet} scroll={tableScroll} /></div> }

            <footer className="flex items-center justify-between mt-3">
                <div className="text-sm">
                    <span>
                        {t('RowsScraped') }
                        {' '}
                    </span>
                    <span className="text-[#274FEE]">{currentSheet?.rows.length ?? 0}</span>
                </div>

                <button className={clsx('py-1.5 px-3 text-white rounded-3xl', linearGradientBackground)} onClick={exportAsCSV}>Export as CSV</button>
            </footer>
        </div>
    );
};
