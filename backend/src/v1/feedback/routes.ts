import { Router } from 'express';
import { middleware } from '../../core/middlewares/index.js';
import { v1FeedbackController } from './controllers/index.js';

export const apiV1feedbackRoutes: Router = Router();

apiV1feedbackRoutes.post('/',
  middleware.asyncHandler(v1FeedbackController.create),
);

apiV1feedbackRoutes.get('/',
  middleware.asyncHandler(v1FeedbackController.list),
);

apiV1feedbackRoutes.get('/:id',
  middleware.asyncHandler(v1FeedbackController.get),
);
