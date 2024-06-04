import { error } from '../../../../core/errors/index.js';
import type { IResponseJson, IResponseJsonMeta } from '../../../../core/interfaces/index.js';
import { prepareFeedbackListResponses } from '../../dto/prepare-feedback-list-response.js';
import type { IListFeedback } from '../../interfaces/index.js';
import { v1FeedbackRepository } from '../../repositories/index.js';

export async function listFeedbacksService(
  inputData: IListFeedback,
): Promise<IResponseJson> {
  const feedbacks = await v1FeedbackRepository.list(inputData);
  const formattedFeedbacks = prepareFeedbackListResponses(feedbacks);

  // create a meta object for the response
  const totalfeedbackCounts = await v1FeedbackRepository.total();
  const totalPages = Math.ceil(totalfeedbackCounts / inputData.limit);
  const apiResponseMeta: IResponseJsonMeta = {
    page: inputData.page,
    perPage: inputData.limit,
    totalPages: totalPages,
    count: formattedFeedbacks.length,
    totalCount: totalfeedbackCounts,
  };

  // if the feedbacks are found, return them
  if (formattedFeedbacks.length) {
    const apiResponse: IResponseJson = {
      okay: true,
      result: formattedFeedbacks,
      meta: apiResponseMeta,
    };
    return apiResponse;
  }

  // if there are no filter and no feedbacks means there are no feedbacks at all!
  const isEmptyForTheFirstTime = totalfeedbackCounts === 0;
  if (isEmptyForTheFirstTime) {
    throw new error.client
      .NotFound('It seems our suggestion box is feeling lonely. Could you drop a line?')
      .setTitle('Echo! Echo! Echo! Anybody out there?')
      .setMeta(apiResponseMeta);
  }

  throw new error.client
    .NotFound('No feedback found with the given criteria :(')
    .setTitle('Oops! No feedback found!')
    .setMeta(apiResponseMeta);
}
