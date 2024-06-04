import { createFeedbackService } from './create-feedback/index.js';
import { listFeedbacksService } from './list-feedbacks/index.js';

export const v1FeedbackService = {
  create: createFeedbackService,
  list: listFeedbacksService,
};
