import { logger } from './logger';
import { happyServer } from './server';

export async function startListening(port: number | string | undefined) {
  try {
    happyServer.listen(port, () => {
      logger.info(`Server is dancing at http://localhost:${port} 💃`);
    });
  } catch (error) {
    logger.error('Error on starting the server!', error);
    process.exit(1);
  }
}
