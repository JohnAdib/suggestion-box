import type { ICreateFeedback, ISavedFeedback } from '@v1Feedback/interfaces';
import Filter from 'bad-words';

export function prepareFeedbackResponse(
  savedFeedback: ISavedFeedback,
): ICreateFeedback {
  const {
    name = '[No name!]',
    email = '[No email!]',
    type,
    title = '[No title!]',
    message = '[No message!]',
  } = savedFeedback;

  const filter = new Filter();

  const filteredFeedback =
   {
     name: filter.clean(name),
     email: filter.clean(email),
     type,
     title: filter.clean(title),
     message: filter.clean(message),
   };

  return filteredFeedback;
}
