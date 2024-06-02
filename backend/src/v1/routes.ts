import { responseApiV1 } from '@responses';
import { Router, type Request, type Response } from 'express';
import { apiV1feedbackRoutes } from './feedback/routes';

export const apiV1Endpoints: Router = Router();

apiV1Endpoints.get('/', (_req: Request, res: Response) => {
  res.status(200).json(responseApiV1);
});

apiV1Endpoints.use('/feedback', apiV1feedbackRoutes);
