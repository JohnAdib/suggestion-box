import { createFeedbackController } from './create-feedback';
import { listFeedbackController } from './list-feedbacks';

export const v1FeedbackController = {
  create: createFeedbackController,
  list: listFeedbackController,
};
