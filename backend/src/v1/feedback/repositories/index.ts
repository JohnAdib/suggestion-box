import { createFeedback } from './create-feedback';
import { listFeedbacks } from './list-feedbacks';
import { numberOfDuplicateMessage } from './number-of-duplicate-message';
import { numberOfEmailRecentActivity } from './number-of-email-recent-activity';
import { totalFeedbackCount } from './total-feedback-count';

export const v1FeedbackRepository = {
  create: createFeedback,
  list: listFeedbacks,
  total: totalFeedbackCount,
  numberOfDuplicateMessage,
  numberOfEmailRecentActivity,
};
