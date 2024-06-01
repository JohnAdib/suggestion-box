import type { NextFunction, Request, Response } from 'express';

export const middlewareCustomHeader = (
  _req: Request,
  res: Response,
  next: NextFunction,
): void => {
  {
    res.set('X-BY', 'MrAdib');
    next();
  }
};
