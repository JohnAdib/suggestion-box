import { type IResponseJson } from '../interfaces/i-response-json';

export const responseApiV1: IResponseJson = {
  okay: true,
  result: null,
  messages: [
    {
      msg: 'Wow! You found the API v1! Am I working? 🤔',
    },
  ],
};
