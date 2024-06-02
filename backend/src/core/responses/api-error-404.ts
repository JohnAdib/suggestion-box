import { type IResponseJson } from '@interfaces';

export const responseApiError404: IResponseJson = {
  okay: false,
  result: null,
  messages: [{
    title: "Error 404 (⊙＿⊙')",
    msg: 'The endpoint you are looking for does not exist! Are you lost? 🧭',
  }],
};
