// import { joinUnitUrl, MsgType, StorageKeys } from '@univer-clipsheet/shared';
import '@src/index.css';
import { t } from '@univer-clipsheet-core/locale';
import type { SetStorageMessage } from '@univer-clipsheet-core/shared';
import { ClipsheetMessageTypeEnum, closePopup, IframeDialogKeyEnum, sendSetIframeDialogKeyMessage } from '@univer-clipsheet-core/shared';
import { deleteTaskRecord, TableStorageKeyEnum, triggerRecordTypes } from '@univer-clipsheet-core/table';
import type { DropdownMenuItem } from '@univer-clipsheet-core/ui';
import { Popup, PopupViewService } from '@univer-clipsheet-core/ui';
import '@univer-clipsheet-core/ui/dist/index.css';
import { useEffect, useMemo } from 'react';
// import { DiscordSingleIcon, ExportSingleIcon, FeedbackSingleIcon, useUser } from './components';
// import { openWorkflowDialog } from './views/workflow-tab/helper';

// enum PopupMenuKeys {
//     LogOut = 'LogOut',
//     Discord = 'Discord',
//     Feedback = 'Feedback',
// }

enum MoreMenuKey {
    // Api = 'api',
    Schedule = 'schedule',
    Delete = 'delete',
}

export function MyPopup() {
    // const user = useUser();

    // const [baseUrl] = useStorageValue<string>(StorageKeys.BaseUrl, '');
    // const baseUrlRef = useRef(baseUrl);
    // baseUrlRef.current = baseUrl;

    // const popupMenus: IPopupMenu[] = useMemo(() => {
    //     return [
    //         {
    //             text: t('LogOut'),
    //             icon: <ExportSingleIcon />,
    //             key: PopupMenuKeys.LogOut,
    //         },
    //         {
    //             text: 'Discord',
    //             icon: <DiscordSingleIcon />,
    //             key: PopupMenuKeys.Discord,
    //         },
    //         {
    //             text: t('Feedback'),
    //             icon: <FeedbackSingleIcon />,
    //             key: PopupMenuKeys.Feedback,
    //         },
    //     ];
    // }, []);

    // const onMenuClick = useCallback(async (menu: IPopupMenu) => {
    //     const tabId = await getActiveTabId();
    //     if (!tabId) {
    //         return;
    //     }

    //     switch (menu.key) {
    //         case PopupMenuKeys.Discord: {
    //             chrome.tabs.create({ url: 'https://discord.gg/rbZcJPm4un' });
    //             break;
    //         }
    //         case PopupMenuKeys.Feedback: {
    //             chrome.tabs.create({ url: 'https://univer.ai/contact-us#clipsheet' });
    //             break;
    //         }
    //         case PopupMenuKeys.LogOut: {
    //             chrome.runtime.sendMessage({
    //                 type: MsgType.LogOut,
    //             });
    //             tabId && chrome.tabs.sendMessage(tabId, {
    //                 type: MsgType.LogOut,
    //             });
    //             break;
    //         }
    //     }
    // }, []);

    // const innerUser = useMemo(() => {
    //     return {
    //         avatar: '',
    //         name: '',
    //         anonymous: true,
    //         ...user,
    //     };
    // }, [user]);

    const service = useMemo(() => {
        const popupViewService = new PopupViewService<string>();

        popupViewService.onTableMoreMenuClick((key, record) => {
            // console.log('onTableMoreMenuClick', key, record);
            if (key === MoreMenuKey.Delete) {
                deleteTaskRecord(record.id);
            }
            // if (key === MoreMenuKey.Schedule) {
            //     openWorkflowDialog({
            //         unitId: record.id,
            //     });
            // }
        });

        popupViewService.onTableRecordClick((record) => {
            // console.log('onTableRecordClick')

            // getActiveTabId().then(tabId => {
            //     if (!tabId) {
            //         return;
            //     }
            //     const msg1: OpenIframeDialogMessage = {
            //         type: UIMessageTypeEnum.OpenIframeDialog,
            //         payload: IframeDialogKeyEnum.TablePanel
            //     }
            //     chrome.tabs.sendMessage(tabId, msg1);
            // })
            // const msg1: SetIframeDialogKeyMessage = {
            //     type: ClipsheetMessageTypeEnum.SetStorage,
            //     payload: {
            //         key:UIStorageKeyEnum.IframeDialogKey,
            //         value: IframeDialogKeyEnum.TablePanel
            //     }
            // }

            const msg2: SetStorageMessage = {
                type: ClipsheetMessageTypeEnum.SetStorage,
                payload: {
                    key: TableStorageKeyEnum.CurrentTableRecord,
                    value: record,
                },
            };

            sendSetIframeDialogKeyMessage(IframeDialogKeyEnum.TablePanel);
            // chrome.runtime.sendMessage( msg1);
            chrome.runtime.sendMessage(msg2);

            closePopup();

            // if (!record.value) {
            //     return;
            // }
            // const unitUrl = joinUnitUrl(baseUrlRef.current, record.value);
            // if (unitUrl) {
            //     chrome.tabs.create({ url: unitUrl });
            // }
        });

        return popupViewService;
    }, []);

    useEffect(() => {
        service.tableRecordMoreMenuRender$.next((record) => {
            const isTriggerRecord = triggerRecordTypes.includes(record.recordType);
            // const showSchedule = isTriggerRecord && user.anonymous === false;
            const menus: DropdownMenuItem[] = [
                // {
                //     text: t('GenerateAPI'),
                //     key: MoreMenuKey.Api,
                // },
                isTriggerRecord && {
                    text: t('ScheduleDataUpdate'),
                    key: MoreMenuKey.Schedule,
                },
                // showSchedule && separateLineMenu,
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
            // sideAffix={(
            //     <UserProfile
            //         user={innerUser}
            //         menus={popupMenus}
            //         onMenuClick={onMenuClick}
            //         onLogInClick={() => chrome.tabs.create({ url: `${baseUrl}/login` })}
            //     />
            // )}
        />
    );
}
