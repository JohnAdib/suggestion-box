import type { NextFunction, Request, Response } from 'express';
import type { IResponseJson } from '../interfaces/i-response-json';
import { logger } from '../logger';

interface IError extends Error {
  statusCode: number;
}

export const middlewareErrorHandling = (
  err: IError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  const errCode = err?.statusCode || 500;
  const errMessage = err?.message || 'Sorry, something went wrong!';

  const apiResponse: IResponseJson = {
    okay: false,
    result: null,
    messages: [{
      title: 'Error [¬º-°]¬',
      msg: errMessage,
    }],
  };

  logger.error(errMessage, { statusCode: errCode });

  res.status(errCode).json(apiResponse);
};
