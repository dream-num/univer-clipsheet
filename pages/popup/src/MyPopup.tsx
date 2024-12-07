import '@src/index.css';
import { t } from '@univer-clipsheet-core/locale';
import type { SetStorageMessage } from '@univer-clipsheet-core/shared';
import { ClipsheetMessageTypeEnum, closePopup, IframeDialogKeyEnum, sendSetIframeDialogKeyMessage } from '@univer-clipsheet-core/shared';
import { deleteTaskRecord, TableStorageKeyEnum, triggerRecordTypes } from '@univer-clipsheet-core/table';
import type { DropdownMenuItem } from '@univer-clipsheet-core/ui';
import { getWorkflowColumnsByTable, openWorkflowDialog, Popup, PopupViewService } from '@univer-clipsheet-core/ui';
import '@univer-clipsheet-core/ui/dist/index.css';
import { useEffect, useMemo } from 'react';

enum MoreMenuKey {
    Schedule = 'schedule',
    Delete = 'delete',
}

export function MyPopup() {
    const service = useMemo(() => {
        const popupViewService = new PopupViewService<string>();

        popupViewService.onTableMoreMenuClick(async (key, record) => {
            if (key === MoreMenuKey.Delete) {
                deleteTaskRecord(record.id);
            }
            if (key === MoreMenuKey.Schedule) {
                const columns = await getWorkflowColumnsByTable(record);
                openWorkflowDialog({
                    tableId: record.id,
                    columns,
                });
            }
        });

        popupViewService.onTableRecordClick((record) => {
            const msg2: SetStorageMessage = {
                type: ClipsheetMessageTypeEnum.SetStorage,
                payload: {
                    key: TableStorageKeyEnum.CurrentTableRecord,
                    value: record,
                },
            };

            sendSetIframeDialogKeyMessage(IframeDialogKeyEnum.TablePanel);

            chrome.runtime.sendMessage(msg2);

            closePopup();
        });

        return popupViewService;
    }, []);

    useEffect(() => {
        service.tableRecordMoreMenuRender$.next((record) => {
            const isTriggerRecord = triggerRecordTypes.includes(record.recordType);

            const menus: DropdownMenuItem[] = [
                isTriggerRecord && {
                    text: t('ScheduleDataUpdate'),
                    key: MoreMenuKey.Schedule,
                },
                {
                    text: <span className="text-[#F05252]">{t('Delete')}</span>,
                    key: MoreMenuKey.Delete,
                },
            ].filter(Boolean) as DropdownMenuItem[];

            return menus;
        });
    }, [service]);

    return (
        <Popup
            service={service}
        />
    );
}
