import type { IResponseJson } from '@interfaces';
import type { ICreateFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackRepository } from '@v1Feedback/repositories';
import { validateWithSchema } from '@validator';
import type { Request, Response } from 'express';
import xss from 'xss';
import { createFeedbackSchema } from './schema';

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
    ...validatedData,
    email: xss(validatedData.email.trim().toLowerCase()),
    name: xss(validatedData.name.trim()),
    message: xss(validatedData.message.trim()),
  };

  console.warn(sanitizedData);

  const createdFeedback = await v1FeedbackRepository.create(sanitizedData);

  const apiResponse: IResponseJson = {
    okay: true,
    result: createdFeedback,
    messages: [{
      type: 'success',
      title: 'Feedback Received',
      msg: 'Your feedback has been successfully posted! Thank you for your time!',
    }],
  };
  res.status(201).send(apiResponse);
};
