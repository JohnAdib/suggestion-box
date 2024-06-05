import type { ISavedFeedback } from '../../interfaces/index.js';
import { feedbackModel } from '../../models/index.js';

export const getFeedback =
async (id: string)
: Promise<ISavedFeedback | null> => {
  // get one feedback
  return feedbackModel.findById(id);
};
