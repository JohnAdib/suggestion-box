import type { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';

export const middlewareLogRequests = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  {
    logger.info(`${req.method} ${req.originalUrl}`, { ip: req.ip });

    // Log the response details
    res.on('finish', () => {
      logger.info(`${req.method} ${req.originalUrl} - ${res.statusCode} ${res.statusMessage}`, { ip: req.ip });
    });

    next();
  }
};
