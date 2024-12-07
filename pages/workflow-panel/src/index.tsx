import { createRoot } from 'react-dom/client';
import '@src/index.css';
import '@univer-clipsheet-core/ui/dist/index.css';
import { WorkflowPanel, WorkflowPanelViewService } from '@univer-clipsheet-core/ui';
import { useMemo } from 'react';

function MyWorkflowPanel() {
    const service = useMemo(() => {
        const workflowPanelViewService = new WorkflowPanelViewService();

        return workflowPanelViewService;
    }, []);

    return <WorkflowPanel service={service} />;
}

function init() {
    const appContainer = document.querySelector('#app-container');
    if (!appContainer) {
        throw new Error('Can not find #app-container');
    }
    const root = createRoot(appContainer);
    root.render(<MyWorkflowPanel />);
}

init();
