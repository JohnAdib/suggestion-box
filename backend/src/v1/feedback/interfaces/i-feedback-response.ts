import type { ICreateFeedback } from './index.js';

export interface IFeedbackResponse extends ICreateFeedback {
  id: string;
  createdAt: Date;
}
