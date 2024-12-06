import { createRoot } from 'react-dom/client';
import '@src/index.css';
import '@univer-clipsheet-core/ui/dist/index.css';
import { WorkflowPanel, WorkflowPanelViewService } from '@univer-clipsheet-core/ui';
import { useMemo } from 'react';

function MyWorkflowPanel() {
    // const [rect, setRect] = useStorageValue<Rect>(UIStorageKeyEnum.IframePanelRect, {
    //     width: 0,
    //     height: 0,
    // });
    const service = useMemo(() => {
        const workflowPanelViewService = new WorkflowPanelViewService();
        // workflowPanelViewService.setEmailNotificationTriggerControl(true);

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
