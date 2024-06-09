import { Schema } from 'mongoose';
import { feedbackTypesList } from '../interfaces/index.js';

export const FeedbackDbSchema: Schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  type: {
    type: String,
    enum: feedbackTypesList,
    required: true,
  },
  title: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
