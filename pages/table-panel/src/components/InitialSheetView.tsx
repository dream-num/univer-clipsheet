import { type IInitialSheet, Sheet_Cell_Type_Enum } from '@univer-clipsheet-core/table';
import type { TableProps } from '@univer-clipsheet-core/ui';
import { Table } from '@univer-clipsheet-core/ui';
import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import { t } from '@univer-clipsheet-core/locale';
import { Link } from './Link';

export interface InitialSheetViewProps {
    className?: string;
    sheet: IInitialSheet;
}

type GetFunction<T> = T extends Function ? T : never;

export const InitialSheetView = (props: InitialSheetViewProps) => {
    const { className, sheet } = props;

    const columns: TableProps['columns'] = useMemo(() => {
        const _columns: Array<NonNullable<TableProps['columns']>[number]> = sheet.columnName.map((name, columnIndex) => {
            return {
                title: <div className="px-2">{name}</div>,
                className: 'border-r',
                width: 200,
                key: name,
                render: (value, row: IInitialSheet['rows'][number]) => {
                    const cell = row.cells[columnIndex];
                    const textContent = cell.type === Sheet_Cell_Type_Enum.URL ? <Link href={cell.url}>{cell.url}</Link> : cell.text;

                    return <div className="text-sm px-2">{textContent}</div>;
                },
            };
        });

        _columns.unshift({
            title: <div className="px-2">{t('Index')}</div>,
            width: 50,
            key: 'Index',
            render: (value, row, index) => <div className="text-sm px-2">{String(index + 1)}</div>,
        });

        return _columns;
    }, [sheet]);

    const rowKey: GetFunction<TableProps['rowKey']> = useCallback((_, i) => String(i), []);
    const onHeaderRow: GetFunction<TableProps['onHeaderRow']> = useCallback((record, index) => {
        return index === 0
            ? {
                style: {
                    backgroundColor: '#F9FAFB',
                },
            }
            : {};
    }, []);

    return (
        <Table
            onHeaderRow={onHeaderRow}
            scroll={{ x: 400, y: 400 }}
            className={clsx('!border !border-solid !border-[#EEEFF1]', className)}
            rowKey={rowKey}
            columns={columns}
            data={sheet.rows}
        >
        </Table>
    );
};
