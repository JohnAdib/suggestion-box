import type { ICreateFeedback, ISavedFeedback } from '@v1Feedback/interfaces';

export function prepareFeedbackResponse(
  savedFeedback: ISavedFeedback,
): ICreateFeedback {
  const { name, email, type, title, message } = savedFeedback;
  return {
    name,
    email,
    type,
    title,
    message,
  };
}
