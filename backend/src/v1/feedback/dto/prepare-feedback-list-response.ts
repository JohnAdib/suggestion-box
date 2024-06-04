import type { ICreateFeedback, ISavedFeedback } from "../interfaces/index.js";
import { prepareFeedbackResponse } from "./prepare-feedback-response.js";


export function prepareFeedbackListResponses(
  savedFeedbacks: ISavedFeedback[],
): ICreateFeedback[] {
  // map over the feedbacks and prepare the response
  // filter out the feedbacks that are not valid
  return savedFeedbacks
    .map(prepareFeedbackResponse);
  // .filter((feedback): feedback is ICreateFeedback => feedback !== null);
}
