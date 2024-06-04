import mongoose from 'mongoose';
import type { ISavedFeedback } from '../interfaces/index.js';
import { FeedbackDbSchema } from './schema.js';

export const feedbackModel =
  mongoose.model<ISavedFeedback>('Feedback', FeedbackDbSchema);
