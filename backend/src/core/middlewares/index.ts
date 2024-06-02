import { asyncHandler } from './async-handler';
import { customHeaders } from './custom-headers';
import { errorHandling } from './error-handling';
import { logRequests } from './log-requests';
import { notFound404 } from './not-found-404';

export const middleware = {
  notFound404,
  asyncHandler,
  customHeaders,
  errorHandling,
  logRequests,
};