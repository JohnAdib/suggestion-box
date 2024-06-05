import type { FeedbackTypesType } from './index.js';

export interface ICreateFeedback {
  id: string;
  name: string;
  email: string;
  type: FeedbackTypesType;
  title: string;
  message: string;
}
