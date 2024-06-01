import { type IResponseJson } from '../interfaces/i-response-json';

export const responseApiHello: IResponseJson = {
  okay: true,
  result: {
    'version': process.env.VERSION,
    'datetime': new Date().toISOString(),
    'latestAPI': '/v1',
    // TODO: add swagger documentation link
    'documentation': '/docs',
  },
  messages: [
    {
      title: 'Hello!',
      msg: 'Welcome to our API. Hope you have a great time here. 🎉',
    },
  ],
};
