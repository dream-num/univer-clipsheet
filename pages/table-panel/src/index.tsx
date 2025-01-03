import { createRoot } from 'react-dom/client';
import '@src/index.css';
import '@univer-clipsheet-core/ui/dist/index.css';
import { TablePanel } from './TablePanel';

function init() {
    const appContainer = document.querySelector('#app-container');
    if (!appContainer) {
        throw new Error('Can not find #app-container');
    }
    const root = createRoot(appContainer);
    root.render(<TablePanel />);
}

init();
