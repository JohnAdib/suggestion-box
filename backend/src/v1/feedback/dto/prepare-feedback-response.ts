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
    name,
    email,
    type,
    title,
    message = '[Empty message, huh?]',
    createdAt,
  } = savedFeedback;

  const filter = new Filter();

  const filteredFeedback: IFeedbackResponse =
  {
    id: savedFeedback?._id?.toString(),
    name: name ? filter.clean(name) : undefined,
    email: email ? filter.clean(email) : undefined,
    type,
    title: title ? filter.clean(title) : undefined,
    message: filter.clean(message),
    createdAt,
  };

  return filteredFeedback;
}
