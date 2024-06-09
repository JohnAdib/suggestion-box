import { error } from '../../../../core/errors/index.js';
import { feedbackModel } from '../../models/index.js';

export const totalFeedbackCount = async (): Promise<number> => {
  try {
    return await feedbackModel.countDocuments({});
  } catch (err) {
    throw new error.client.Database(err);
  }
};
