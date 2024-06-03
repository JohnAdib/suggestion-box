import { middleware } from '@middlewares';
import { Router } from 'express';
import { v1FeedbackController } from './controllers';

export const apiV1feedbackRoutes: Router = Router();

apiV1feedbackRoutes.get('/',
  middleware.asyncHandler(v1FeedbackController.list),
);

apiV1feedbackRoutes.post('/',
  middleware.asyncHandler(v1FeedbackController.create),
);
