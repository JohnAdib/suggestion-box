import { createFeedback } from './create-feedback/index.js';
import { listFeedbacks } from './list-feedbacks/index.js';
import { numberOfDuplicateMessage } from './number-of-duplicate-message/index.js';
import { numberOfEmailRecentActivity } from './number-of-email-recent-activity/index.js';
import { totalFeedbackCount } from './total-feedback-count/index.js';

export const v1FeedbackRepository = {
  create: createFeedback,
  list: listFeedbacks,
  total: totalFeedbackCount,
  numberOfDuplicateMessage,
  numberOfEmailRecentActivity,
};
