import type { IResponseJsonMessage } from './i-response-json-message';
import type { IResponseJsonMeta } from './i-response-json-meta';

export interface IServiceResult {
  okay: boolean;
  messages?: Array<IResponseJsonMessage>;
  result: any;
  meta?: IResponseJsonMeta;
}