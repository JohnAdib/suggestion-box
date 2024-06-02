import type { IResponseJsonMessage } from './i-response-json-message';

export interface IError extends Error {
  statusCode: number;
  title?: string;
  messages?: IResponseJsonMessage[];
}