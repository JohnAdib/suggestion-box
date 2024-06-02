import { responseApiError404 } from '@responses';
import type { Request, Response } from 'express';

export const notFound404 = (
  _req: Request,
  res: Response,
): void => {
  res.status(404).json(responseApiError404);
};
