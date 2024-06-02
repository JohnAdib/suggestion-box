import type { IError, IResponseJson } from '@interfaces';
import { logger } from '@logger';
import type { NextFunction, Request, Response } from 'express';

export const errorHandling = (
  err: IError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  const errCode = err?.statusCode || 501;
  const errTitle = err?.title || 'Error (¬º-°)¬';
  const errMessage = err?.message || 'Sorry, something went wrong!';

  const apiResponse: IResponseJson = {
    okay: false,
    result: null,
    messages: [{
      type: 'error',
      title: errTitle,
      msg: errMessage,
    }],
  };

  // if there are messages, overwrite the default message
  // mostly used for validation errors
  if (err?.messages) {
    apiResponse.messages = err.messages;
  }

  logger.error(errTitle, {
    statusCode: errCode,
    message: errMessage,
    messages: err?.messages,
  });

  res.status(errCode).json(apiResponse);
};
