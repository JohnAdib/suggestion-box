import { connectToMongoDb } from './core/database/index.js';
import { fireHappyServer } from './core/server/index.js';
import { apiEndpoints } from './routes.js';

// import ENV variables from .env file and assign them to process.env
import 'dotenv/config';

const port = process.env.PORT || 7011;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/suggestion-box';

console.log("dbUri", dbUri);

connectToMongoDb(dbUri);
fireHappyServer({ port, apiEndpoints });
