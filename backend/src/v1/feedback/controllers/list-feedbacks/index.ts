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
  const inputData = req.query as unknown as IListFeedback;
  const validatedData: IListFeedback = validateWithSchema({
    schema: listFeedbackSchema,
    data: inputData,
  });

  // set the default values if not provided
  let {
    page = 1,
    limit = 10,
    order = 'asc',
    orderby = 'date',
    type,
  } = validatedData;
  const updatedData: IListFeedback = { page, limit, order, orderby, type };

  const feedbacks = await v1FeedbackService.list(updatedData);

  const apiResponse: IResponseJson = {
    okay: true,
    result: feedbacks,
  };

  res.status(200).send(apiResponse);
};
