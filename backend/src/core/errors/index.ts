import { Conflict } from './conflict';
import { NotFound } from './not-found';
import { TooManyRequests } from './too-many-requests';
import { ValidationGroupMessages } from './validation-group-messages';

export const error = {
  client: {
    ValidationGroupMessages,
    NotFound,
    Conflict,
    TooManyRequests,
  },
};