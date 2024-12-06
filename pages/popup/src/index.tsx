import '@src/index.css';
import '@univer-clipsheet-core/ui/dist/index.css';
import { createRoot } from 'react-dom/client';
import { MyPopup } from './MyPopup';

function init() {
    const appContainer = document.querySelector('#app-container');
    if (!appContainer) {
        throw new Error('Can not find #app-container');
    }
    const root = createRoot(appContainer);

    root.render(<MyPopup />);
}

init();
