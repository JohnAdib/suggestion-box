import type { IResponseJsonMessage } from '@interfaces';

export class ValidationGroupMessages extends Error {

  public statusCode: number;

  public messages: IResponseJsonMessage[];

  public title: string;

  constructor(messages: IResponseJsonMessage[]) {
    super('Validation Error');
    this.statusCode = 422;
    this.messages = messages;
    this.title = 'ValidationError';
  }
}
