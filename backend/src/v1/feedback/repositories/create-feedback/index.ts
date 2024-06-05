import type { ICreateFeedback, ISavedFeedback } from '../../interfaces/index.js';
import { feedbackModel } from '../../models/index.js';

export const createFeedback =
async (feedbackData: ICreateFeedback)
: Promise<ISavedFeedback> => {
  const feedback = new feedbackModel(feedbackData);
  return feedback.save();
};
