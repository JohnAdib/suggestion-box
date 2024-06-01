type ResponseMessageTypes =
| 'error'
| 'warn'
| 'info'
| 'success'
| 'field';

export interface IResponseJsonMessage {
  msg: string;
  title?: string;
  type?: ResponseMessageTypes;
  path?: string;
}

export interface IResponseJson {
  okay: boolean;
  messages: Array<IResponseJsonMessage>;
  result: any;
  meta?: any;
}