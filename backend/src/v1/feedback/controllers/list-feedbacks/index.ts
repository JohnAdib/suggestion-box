import type { IResponseJson } from '@interfaces';
import type { IListFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackService } from '@v1Feedback/services';
import { validateWithSchema } from '@validator';
import type { Request, Response } from 'express';
import { listFeedbackSchema } from './schema';

export const listFeedbackController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const inputData = req.query;
  const validatedData: IListFeedback = validateWithSchema({
    schema: listFeedbackSchema,
    data: inputData,
  });

  const feedbacks = await v1FeedbackService.list(validatedData);

  const apiResponse: IResponseJson = {
    okay: true,
    result: feedbacks,
  };

  res.status(200).send(apiResponse);
};
