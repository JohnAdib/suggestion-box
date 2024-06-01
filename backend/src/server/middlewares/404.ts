import type { Request, Response } from 'express';
import type { IResponseJson } from '../interfaces/i-response-json';

export const middleware404 = (
  _req: Request,
  res: Response,
): void => {
  const apiResponse: IResponseJson = {
    okay: false,
    result: null,
    messages: [{
      title: "Error 404 (⊙＿⊙')",
      msg: 'The endpoint you are looking for does not exist! Are you lost? 🧭',
    }],
  };

  res.status(404).json(apiResponse);
};
