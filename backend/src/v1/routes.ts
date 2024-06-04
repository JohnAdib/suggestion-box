import { Router, type Request, type Response } from 'express';
import { responseApiV1 } from '../core/responses/index.js';
import { apiV1feedbackRoutes } from './feedback/routes.js';

export const apiV1Endpoints: Router = Router();

apiV1Endpoints.get('/', (_req: Request, res: Response) => {
  res.status(200).json(responseApiV1);
});

apiV1Endpoints.use('/feedback', apiV1feedbackRoutes);
