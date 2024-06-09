import { error } from '../../../../core/errors/index.js';
import type { ISavedFeedback } from '../../interfaces/index.js';
import { feedbackModel } from '../../models/index.js';

export const getFeedback = async (
  id: string,
): Promise<ISavedFeedback | null> => {
  try {
    return await feedbackModel.findById(id);
  } catch (err) {
    throw new error.client.Database(err);
  }
};
