import { feedbackModel } from "../../models/index.js";

export const totalFeedbackCount =
async ()
: Promise<number> => {
  return feedbackModel.countDocuments({});
};