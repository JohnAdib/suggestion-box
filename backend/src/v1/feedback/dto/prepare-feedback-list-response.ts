import type { ICreateFeedback, ISavedFeedback } from '../interfaces/index.js';
import { prepareFeedbackResponse } from './prepare-feedback-response.js';

export function prepareFeedbackListResponses(
  savedFeedbacks: ISavedFeedback[] | null,
): ICreateFeedback[] | null {

  const formattedFeedbackList
  : ICreateFeedback[] | undefined = savedFeedbacks
    ?.map(prepareFeedbackResponse)
    .filter((feedback): feedback is ICreateFeedback=> feedback !== null);

  return formattedFeedbackList || null;
}
