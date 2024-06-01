import 'dotenv/config';
import express, { type Application } from 'express';
import helmet from 'helmet';
import { middleware404 } from './middlewares/404';
import { middlewareCustomHeader } from './middlewares/custom-headers';
import { middlewareErrorHandling } from './middlewares/error-handling';
import { middlewareLogRequests } from './middlewares/log-requests';
import { routes } from './routes';

const happyServer: Application = express();

// disable etag caching to avoid 304 responses
happyServer.disable('etag');

// middlewares
happyServer.use(helmet());
happyServer.use(middlewareCustomHeader);
happyServer.use(express.json());
happyServer.use(middlewareLogRequests);

// routes
routes(happyServer);

// error handling
happyServer.use(middlewareErrorHandling);
happyServer.use(middleware404);

export { happyServer };
