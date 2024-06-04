import type { IResponseJson } from './i-response-json.js';

// export interface IError extends Error {
//   statusCode: number;
//   title?: string;
//   data?: any;
//   meta?: IResponseJsonMeta;
//   messages?: IResponseJsonMessage[];
// }

export interface IError extends Error, IResponseJson {}
