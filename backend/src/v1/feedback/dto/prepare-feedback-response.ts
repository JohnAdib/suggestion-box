import Filter from 'bad-words';
import type { IFeedbackResponse } from '../interfaces/i-feedback-response.js';
import type { ICreateFeedback, ISavedFeedback } from '../interfaces/index.js';

export function prepareFeedbackResponse(
  savedFeedback: ISavedFeedback | null,
): ICreateFeedback | null {
  if (!savedFeedback) {
    return null;
  }
  const {
    name = '[No name!]',
    email = '[No email!]',
    type,
    title = '[No title!]',
    message = '[No message!]',
    createdAt,
  } = savedFeedback;

  const filter = new Filter();

  const filteredFeedback: IFeedbackResponse =
   {
     id: savedFeedback._id.toString(),
     name: filter.clean(name.trim()),
     email: filter.clean(email).trim(),
     type,
     title: filter.clean(title.trim()),
     message: filter.clean(message.trim()),
     createdAt,
   };

  return filteredFeedback;
}
