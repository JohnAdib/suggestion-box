import type { FeedbackTypeTypes } from './feedback-types';

export interface IFeedbackResponse {
  id: string;
  name?: string;
  email?: string;
  type: FeedbackTypeTypes;
  title?: string;
  message: string;
  createdAt: Date;
}
