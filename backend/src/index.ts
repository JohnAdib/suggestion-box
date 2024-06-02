import { connectToMongoDb } from '@database';
import { fireHappyServer } from '@server';
import { apiEndpoints } from './routes';

// import ENV variables from .env file and assign them to process.env
import 'dotenv/config';

const port = process.env.PORT || 7001;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/suggestion-box';

await connectToMongoDb(dbUri);
await fireHappyServer({ port, apiEndpoints });
