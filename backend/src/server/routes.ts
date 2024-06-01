import type { Application, Request, Response } from 'express';
import { v1Endpoints } from '../v1/routes';
import { responseApiHello } from './responses/api-hello';

export async function routes(app: Application): Promise<void> {
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).json(responseApiHello);
  });

  app.use('/v1', v1Endpoints);
}
