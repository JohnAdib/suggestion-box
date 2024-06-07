import type { Request, Response } from 'express';
import type { IResponseJson } from '../../../../core/interfaces/index.js';
import { validateWithSchema } from '../../../../core/validator/index.js';
import type { IFilterGetFeedback } from '../../interfaces/index.js';
import { v1FeedbackService } from '../../services/index.js';
import { getFeedbackSchema } from './schema.js';

export const getFeedbackController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const inputData = req.params as unknown as IFilterGetFeedback;
  const validatedData: IFilterGetFeedback = validateWithSchema({
    schema: getFeedbackSchema,
    data: inputData,
  });

  const feedbackId = validatedData.id;
  const feedback = await v1FeedbackService.get(feedbackId);

  const apiResponse: IResponseJson = {
    okay: true,
    result: feedback,
  };

  res.status(200).send(apiResponse);
};
