import initClient from '../initClient';

function addReload() {
    const reload = () => {
    // @ts-expect-error
        chrome.runtime.reload();
    };

    initClient({
    // @ts-expect-error
        id: __HMR_ID,
        onUpdate: reload,
    });
}

addReload();
