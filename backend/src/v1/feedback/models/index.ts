import type { ISavedFeedback } from '@v1Feedback/interfaces';
import mongoose from 'mongoose';
import { FeedbackDbSchema } from './schema';

export const feedbackModel =
  mongoose.model<ISavedFeedback>('Feedback', FeedbackDbSchema);
