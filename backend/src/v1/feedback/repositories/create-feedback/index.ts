import { error } from '../../../../core/errors/index.js';
import type { ICreateFeedback, ISavedFeedback } from '../../interfaces/index.js';
import { feedbackModel } from '../../models/index.js';

export const createFeedback =
  async (feedbackData: ICreateFeedback): Promise<ISavedFeedback> => {
    try {
      const feedback = new feedbackModel(feedbackData);
      return await feedback.save();
    } catch (err) {
      throw new error.client.Database(err);
    }
  };
