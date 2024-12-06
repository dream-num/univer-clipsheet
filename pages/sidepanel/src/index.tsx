import '@src/index.css';
import { SidePanel, SidePanelViewService } from '@univer-clipsheet-core/ui';
import '@univer-clipsheet-core/ui/dist/index.css';
import { createRoot } from 'react-dom/client';
// import SidePanel from '@src/SidePanel';

function init() {
    const appContainer = document.querySelector('#app-container');
    if (!appContainer) {
        throw new Error('Can not find #app-container');
    }
    const root = createRoot(appContainer);
    const service = new SidePanelViewService();
    // service.interceptDrillDownConfig(async (config) => {
    //     const newDrillDownColumns = config.columns.filter((c) => {
    //         return (c as RuntimeDrillDownColumn).cellData;
    //     });

    //     if (newDrillDownColumns.length > 0) {
    //         const uniqueId = generateRandomId();

    //         const rows: ISheet_Row[] = [{
    //             cells: config.columns.map((c) => {
    //                 const cellData = (c as RuntimeDrillDownColumn).cellData;
    //                 return {
    //                     type: c.type,
    //                     text: cellData?.text ?? '',
    //                     url: (cellData?.href || cellData?.src) ?? '',
    //                 };
    //             }),
    //         }];

    //         const res = await requestDataSource<PushIntelligenceColumnMessage['payload']['value']>(DataSourceKeys.IntelligenceColumns, {
    //             id: uniqueId,
    //             rows,
    //         }, (msg) => msg.payload.value.id === uniqueId);

    //         config.columns.forEach((c, i) => {
    //             c.name = res.cols[i].name;
    //         });
    //     }

    //     newDrillDownColumns.forEach(((c) => {
    //         delete (c as RuntimeDrillDownColumn).cellData;
    //     }));

    //     return config;
    // });
    root.render(<SidePanel service={service} />);
}

init();
