import { createFeedbackController } from './create-feedback/index.js';
import { getFeedbackController } from './get-feedback/index.js';
import { listFeedbackController } from './list-feedbacks/index.js';

export const v1FeedbackController = {
  create: createFeedbackController,
  list: listFeedbackController,
  get: getFeedbackController,
};
