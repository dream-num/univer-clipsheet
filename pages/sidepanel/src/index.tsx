import '@src/index.css';
import { SidePanel, SidePanelViewService } from '@univer-clipsheet-core/ui';
import '@univer-clipsheet-core/ui/dist/index.css';
import { createRoot } from 'react-dom/client';

function init() {
    const appContainer = document.querySelector('#app-container');
    if (!appContainer) {
        throw new Error('Can not find #app-container');
    }
    const root = createRoot(appContainer);
    const service = new SidePanelViewService();

    root.render(<SidePanel service={service} />);
}

init();
