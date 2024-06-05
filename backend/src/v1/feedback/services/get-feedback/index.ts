import mongoose from 'mongoose';
import { error } from '../../../../core/errors/index.js';
import type { IResponseJson } from '../../../../core/interfaces/index.js';
import { prepareFeedbackResponse } from '../../dto/prepare-feedback-response.js';
import { v1FeedbackRepository } from '../../repositories/index.js';

export async function getFeedbacksService(
  id: string,
): Promise<IResponseJson> {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new error.client
      .NotFound('The id is not valid :(')
      .setTitle('Sorry! Invalid id!');
  }

  const feedback = await v1FeedbackRepository.get(id);
  const formattedFeedbacks = prepareFeedbackResponse(feedback);

  // if the feedbacks are found, return them
  if (formattedFeedbacks) {
    const apiResponse: IResponseJson = {
      okay: true,
      result: formattedFeedbacks,
    };
    return apiResponse;
  }

  throw new error.client
    .NotFound('No feedback found with the this id :(')
    .setTitle('Oops! No feedback found!');
}
