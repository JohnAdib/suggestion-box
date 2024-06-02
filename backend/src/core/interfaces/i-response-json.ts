import type { IResponseJsonMessage } from './i-response-json-message';

export interface IResponseJson {
  okay: boolean;
  messages?: Array<IResponseJsonMessage>;
  result: any;
  meta?: any;
}