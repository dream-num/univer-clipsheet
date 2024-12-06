import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('../package.json', 'utf8'));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
    manifest_version: 3,
    default_locale: 'en',
    /**
     * if you want to support multiple languages, you can use the following reference
     * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
     */
    name: '__MSG_extensionName__',
    version: packageJson.version,
    description: '__MSG_extensionDescription__',
    permissions: ['storage', 'tabs', 'unlimitedStorage', 'contextMenus', 'sidePanel', 'webNavigation'],
    // host_permissions: ['<all_urls>'],
    host_permissions: ['http://*/*', 'https://*/*'],
    side_panel: {
        default_path: 'sidepanel/index.html',
    },
    // To open the option page introduce user how best practice for this extension
    // options_page: 'options/index.html',
    background: {
        service_worker: 'background.iife.js',
        type: 'module',
    },
    action: {
        default_popup: 'popup/index.html',
        default_icon: 'icon-32.png',
    },
    icons: {
        128: 'icon-128.png',
    },
    content_scripts: [
        {
            matches: ['http://*/*', 'https://*/*'],
            js: ['content/index.iife.js'],
            run_at: 'document_start',
        },
        // {
        //   matches: ['http://*/*', 'https://*/*'],
        //   js: ['content-ui/index.iife.js'],
        // },
        {
            matches: ['http://*/*', 'https://*/*'],
            css: ['content.css'], // public folder
        },
    ],
    // devtools_page: 'devtools/index.html',
    web_accessible_resources: [
        {
            resources: [
                'content/templates/*.html',
                'table-panel/*.html',
                'workflow-panel/*.html',
                '*.js',
                '*.css',
                '*.svg',
                'icon-128.png',
                'icon-32.png',
            ],
            matches: ['*://*/*'],
        },
    ],
};

export default manifest;
