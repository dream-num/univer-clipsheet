import '@src/index.css';
import { t } from '@univer-clipsheet-core/locale';
import type { SetStorageMessage } from '@univer-clipsheet-core/shared';
import { ClipsheetMessageTypeEnum, closePopup, IframeViewTypeEnum, sendSetIframeViewMessage } from '@univer-clipsheet-core/shared';
import { deleteTaskRecord, TableStorageKeyEnum, triggerRecordTypes } from '@univer-clipsheet-core/table';
import type { DropdownMenuItem } from '@univer-clipsheet-core/ui';
import { DropdownMenu, getWorkflowColumnsByTable, openWorkflowDialog, Popup, PopupViewService } from '@univer-clipsheet-core/ui';
import '@univer-clipsheet-core/ui/dist/index.css';
import { useEffect, useMemo } from 'react';
import clsx from 'clsx';
import {
    DiscordSvg,
    // GiteeSvg,
    GithubSvg,
    LinkSvg,
    // WeChatSvg,
} from './icons';

enum MoreMenuKey {
    Schedule = 'schedule',
    Delete = 'delete',
}

enum ContactMenuKey {
    Discord = 'discord',
    Github = 'github',
    Gitee = 'gitee',
    WeCom = 'we_com',
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

            sendSetIframeViewMessage(IframeViewTypeEnum.TablePanel);

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

    const contactMenus: DropdownMenuItem[] = useMemo(() => {
        // const isZh = isZhCN();

        // if (isZh) {
        //     return [
        //         {
        //             key: ContactMenuKey.WeCom,
        //             text: (
        //                 <div className="flex items-center">
        //                     <WeChatSvg />
        //                     <span className="ml-1">微信</span>
        //                 </div>
        //             ),
        //         },
        //         {
        //             key: ContactMenuKey.Gitee,
        //             text: (
        //                 <div className="flex items-center">
        //                     <GiteeSvg />
        //                     <span className="ml-1">Gitee</span>
        //                 </div>
        //             ),
        //         },
        //     ];
        // } else {
        return [
            {
                key: ContactMenuKey.Discord,

                text: (
                    <div className="flex items-center">
                        <DiscordSvg className="text-gray-900" />
                        <span className="ml-1">Discord</span>
                    </div>
                ),
            },
            {
                key: ContactMenuKey.Github,
                text: (
                    <div className="flex items-center">
                        <GithubSvg className="text-gray-900 opacity-1 w-4 h-4" />
                        <span className="ml-1">Github</span>
                    </div>
                ),
            },
        ];
        // }
    }, []);

    const handleContactMenuChange = (key: string) => {
        switch (key) {
            case ContactMenuKey.Discord: {
                chrome.tabs.create({ url: 'https://discord.gg/rbZcJPm4un' });
                break;
            }
            case ContactMenuKey.Github: {
                chrome.tabs.create({ url: 'https://github.com/dream-num/univer-clipsheet' });
                break;
            }
            // case ContactMenuKey.Gitee: {
            //     break;
            // }
            // case ContactMenuKey.WeCom: {
            //     break;
            // }
        }
    };

    return (
        <Popup
            service={service}
            sideAffix={(
                <DropdownMenu onChange={handleContactMenuChange} menus={contactMenus} placement="topLeft" trigger="hover">
                    <button className={clsx('rounded-full p-3 text-gray-600 hover:text-indigo-600 bg-gray-100  transition-colors hover:bg-indigo-100')}>
                        <LinkSvg className="w-[18px] h-[18px]" />
                    </button>
                </DropdownMenu>
            )}
        />
    );
}
