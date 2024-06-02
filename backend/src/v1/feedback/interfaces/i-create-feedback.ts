import type { FeedbackTypesType } from './feedback-types';

export interface ICreateFeedback {
  name: string;
  email: string;
  type: FeedbackTypesType;
  title: string;
  message: string;
}
