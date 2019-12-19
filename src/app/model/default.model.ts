export enum DefaultStatusResponseEnum {
    OK = 'OK', ERROR = 'ERROR', WARN = 'WARN'
}

export class DefaultMessageResponse {
    status: DefaultStatusResponseEnum;
    shortMessage: string;
    message: string;
    response: any;

    constructor(status?: DefaultStatusResponseEnum, shortMessage?: string, message?: string, response?: any) {
        this.status = status;
        this.shortMessage = shortMessage;
        this.message = message;
        this.response = response;
    }
}