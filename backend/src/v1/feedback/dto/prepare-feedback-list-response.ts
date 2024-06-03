import type { ICreateFeedback, ISavedFeedback } from '@v1Feedback/interfaces';
import { prepareFeedbackResponse } from './prepare-feedback-response';

export function prepareFeedbackListResponses(
  savedFeedbacks: ISavedFeedback[],
): ICreateFeedback[] {
  return savedFeedbacks.map(prepareFeedbackResponse);
}
