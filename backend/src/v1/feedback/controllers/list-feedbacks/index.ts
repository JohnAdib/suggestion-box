import type { Request, Response } from 'express';
import { validateWithSchema } from '../../../../core/validator/index.js';
import type { IFilterListFeedback } from '../../interfaces/index.js';
import { v1FeedbackService } from '../../services/index.js';
import { listFeedbackSchema } from './schema.js';

export const listFeedbackController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const inputData = req.query as unknown as IFilterListFeedback;
  const validatedData: IFilterListFeedback = validateWithSchema({
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

  const updatedData: IFilterListFeedback = {
    page,
    limit,
    order,
    orderby,
    type,
  };

  const apiResponse = await v1FeedbackService.list(updatedData);

  res.status(200).send(apiResponse);
};
