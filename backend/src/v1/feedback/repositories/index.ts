import { createFeedback } from './create-feedback';
import { listFeedbacks } from './list-feedbacks';

export const v1FeedbackRepository = {
  create: createFeedback,
  list: listFeedbacks,
};
