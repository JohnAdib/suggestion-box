import { error } from '@errors';
import type { IListFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackRepository } from '@v1Feedback/repositories';
import type { IResponseJson, IResponseJsonMeta } from 'src/core/interfaces';

export async function listFeedbacksService(
  inputData: IListFeedback,
): Promise<IResponseJson> {
  const feedbacks = await v1FeedbackRepository.list(inputData);

  // create a meta object for the response
  const totalfeedbackCounts = await v1FeedbackRepository.total();
  const totalPages = Math.ceil(totalfeedbackCounts / inputData.limit);
  const apiResponseMeta: IResponseJsonMeta = {
    page: inputData.page,
    perPage: inputData.limit,
    totalPages: totalPages,
    count: feedbacks.length,
    totalCount: totalfeedbackCounts,
  };

  // if the feedbacks are found, return them
  if (feedbacks.length) {
    const apiResponse: IResponseJson = {
      okay: true,
      result: feedbacks,
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
