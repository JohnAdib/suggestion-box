import type { Request, Response } from 'express';
import type { IResponseJson } from '../../../../core/interfaces/index.js';
import { validateWithSchema } from '../../../../core/validator/index.js';
import type { IListFeedback } from '../../interfaces/index.js';
import { v1FeedbackService } from '../../services/index.js';
import { listFeedbackSchema } from './schema.js';

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
