import { createFeedback } from './create-feedback';
import { listFeedbacks } from './list-feedbacks';
import { totalFeedbackCount } from './total-feedback-count';

export const v1FeedbackRepository = {
  create: createFeedback,
  list: listFeedbacks,
  total: totalFeedbackCount,
};
