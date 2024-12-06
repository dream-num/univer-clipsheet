
export interface IE2EEvents {
    GetDetectedTables: Event;
    SendDetectedTables: CustomEvent<{ tables: Array<{ id: string; rows: number }> }>;
}

export type E2EEventName = keyof IE2EEvents;

export class E2EController {
    constructor(
        // @Inject(DetectTablesController) private _detectTablesController: DetectTablesController
    ) {
        this._listenEvents();
    }

    private _listenEvents() {
        // window.addEventListener('GetDetectedTables', () => {
        //     this._detectTablesController.detectTables();
        //     const tables = this._detectTablesController.getDetectedTables();
        //     window.dispatchEvent(new CustomEvent('SendDetectedTables', { detail: { tables } }));
        // });
    }
}

