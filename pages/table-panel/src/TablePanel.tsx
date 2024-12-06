import { t } from '@univer-clipsheet-core/locale';
import { IframeDialogKeyEnum, sendSetIframeDialogKeyMessage } from '@univer-clipsheet-core/shared';
import type { IInitialSheet, ITableRecord } from '@univer-clipsheet-core/table';
import { getCellValue, TableStorageKeyEnum } from '@univer-clipsheet-core/table';
import { CloseGraySvg, linearGradientBackground, useStorageValue, useSyncIframeRectEffect } from '@univer-clipsheet-core/ui';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { saveAs } from 'file-saver';
import { InitialSheetView } from './components/InitialSheetView';
import { Link } from './components/Link';
import { generateColumnNames } from './tools';

export const TablePanel = () => {
    const [currentTableRecord] = useStorageValue<ITableRecord | null>(TableStorageKeyEnum.CurrentTableRecord, null);

    const [tableRecordSheets] = useStorageValue<IInitialSheet[]>(TableStorageKeyEnum.TableSheetsPrefix + currentTableRecord?.id, []);

    const containerRef = React.useRef<HTMLDivElement>(null);

    const [sheetIndex, setSheetIndex] = React.useState(0);

    const currentSheet = useMemo(() => {
        const sheet = tableRecordSheets[sheetIndex];
        if (!sheet) {
            return null;
        }

        return {
            ...sheet,
            columnName: generateColumnNames(sheet),
        };
    }, [tableRecordSheets, sheetIndex]);

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

    return (
        <div ref={containerRef} className="w-[744px] rounded-2xl p-5 bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-base">{currentTableRecord?.title}</h1>
                    <Link href={currentTableRecord?.sourceUrl ?? ''}>{t('OriginalLink')}</Link>
                </div>

                <button className={clsx('p-1 hover:bg-gray-100 rounded-sm')} onClick={() => sendSetIframeDialogKeyMessage(IframeDialogKeyEnum.None)}>
                    <CloseGraySvg />
                </button>
            </div>
            <div className="text-right mt-25">
                <button className={clsx('py-1.5 px-3 text-white rounded-3xl', linearGradientBackground)} onClick={exportAsCSV}>Export as CSV</button>
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex mt-2 grow">
                    {tableRecordSheets.map((sheet, index) => {
                        return (
                            <li
                                key={index}
                                className={clsx('p-2 border border-solid border-gray-200 !border-b-0 hover:bg-slate-100 cursor-pointer rounded !rounded-b-none', {
                                    'bg-[#EBF1FF]': sheetIndex === index,

                                })}
                                onClick={() => setSheetIndex(index)}
                            >
                                {`${t('Table')} ${index + 1}`}
                            </li>
                        );
                    })}
                </ul>
                <div className="text-sm">
                    <span>
                        {t('Table')}
                        {' '}
                        {t('Rows')}
                        :
                    </span>
                    <span className="text-blue-500 ml-1">{currentSheet?.rows.length ?? 0}</span>
                </div>
            </div>

            {currentSheet && <div><InitialSheetView sheet={currentSheet} /></div> }
        </div>
    );
};
