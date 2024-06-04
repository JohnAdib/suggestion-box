import mongoose from 'mongoose';
import { logger } from '../logger/index.js';

export async function connectToMongoDb(
  dbUri: string | undefined,
): Promise<void> {
  if (!dbUri) {
    logger.warn('Skipping DB connection! URI is not provided! 🤷');
    return;
  }

  mongoose.connect(dbUri)
    .then(() => {
      logger.info('Connected to Db! Warm up the dance floor!');
    })
    .catch(error => {
      logger.error('Error connecting to MongoDB! 💥', error);
      process.exit(1);
    });
}
