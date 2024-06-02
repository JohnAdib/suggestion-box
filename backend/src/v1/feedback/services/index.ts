import { createFeedbackService } from './create-feedback';
import { listFeedbacksService } from './list-feedbacks';

export const v1FeedbackService = {
  create: createFeedbackService,
  list: listFeedbacksService,
};
