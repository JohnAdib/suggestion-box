import { connectToMongoDb } from './server/connect-to-mongo-db';
import { startListening } from './server/start';

// import ENV variables from .env file and assign them to process.env
import 'dotenv/config';

const port = process.env.PORT || 7001;
const dbUri = process.env.MONGODB_URI;

await connectToMongoDb(dbUri);
await startListening(port);
