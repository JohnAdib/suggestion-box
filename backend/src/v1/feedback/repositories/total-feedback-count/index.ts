import { feedbackModel } from '@v1Feedback/models';

export const totalFeedbackCount =
async ()
: Promise<number> => {
  return feedbackModel.countDocuments({});
};