interface UpdateRequestMessage {
    type: 'do_update';
    id: string;
}
interface UpdateCompleteMessage { type: 'done_update' }
interface PingMessage { type: 'ping' }
interface BuildCompletionMessage { type: 'build_complete'; id: string }

export type SerializedMessage = string;

export type WebSocketMessage = UpdateCompleteMessage | UpdateRequestMessage | BuildCompletionMessage | PingMessage;
