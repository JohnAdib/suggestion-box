import type {
  ICreateFeedback,
  ISavedFeedback,
} from '@v1Feedback/interfaces';
import { feedbackModel } from '@v1Feedback/models';

export const createFeedback =
async (feedbackData: ICreateFeedback)
: Promise<ISavedFeedback> => {
  const feedback = new feedbackModel(feedbackData);
  return feedback.save();
};
