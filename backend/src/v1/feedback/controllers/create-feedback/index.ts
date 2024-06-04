import type { Request, Response } from 'express';
import xss from 'xss';
import { validateWithSchema } from '../../../../core/validator/index.js';
import type { ICreateFeedback } from '../../interfaces/index.js';
import { v1FeedbackService } from '../../services/index.js';
import { createFeedbackSchema } from './schema.js';

export const createFeedbackController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const inputData = req.body;
  const validatedData: ICreateFeedback = validateWithSchema({
    schema: createFeedbackSchema,
    data: inputData,
  });

  const sanitizedData: ICreateFeedback = {
    name: xss(validatedData.name.trim()),
    email: xss(validatedData.email.trim().toLowerCase()),
    type: validatedData.type,
    title: xss(validatedData.title.trim()),
    message: xss(validatedData.message.trim()),
  };

  const apiResponse = await v1FeedbackService.create(sanitizedData);

  apiResponse.messages = [{
    type: 'success',
    title: 'Feedback Received',
    msg: 'Your feedback has been successfully posted! Thank you for your time!',
  }];

  res.status(201).send(apiResponse);
};
