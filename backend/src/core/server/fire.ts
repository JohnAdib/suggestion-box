import { logger } from '@logger';
import { middleware } from '@middlewares';
import express, { type Application } from 'express';
import helmet from 'helmet';
import type { IServer } from './i-server';

export function fireHappyServer({
  port = 3000,
  apiEndpoints,
}: IServer): void {

  const happyServer: Application = express();

  // disable etag caching to avoid 304 responses
  happyServer.disable('etag');

  // middlewares
  happyServer.use(helmet());
  happyServer.use(middleware.customHeaders);
  happyServer.use(express.json());
  happyServer.use(middleware.logRequests);

  // routes
  happyServer.use(apiEndpoints);

  // error handling
  happyServer.use(middleware.errorHandling);
  happyServer.use(middleware.notFound404);

  // try to start the server
  try {
    happyServer.listen(port, () => {
      logger.info(`Server is dancing at http://localhost:${port} 💃`);
    });
  } catch (error) {
    // TODO: improve error handling to detect the error type
    logger.error('Error on starting the server!', error);
    process.exit(1);
  }
}
