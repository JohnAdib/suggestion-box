import type { ICreateFeedback } from './i-create-feedback';

export interface ISavedFeedback extends ICreateFeedback {
  _id: string;
  createdAt: Date;
}
