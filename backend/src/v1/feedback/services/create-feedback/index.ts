import type { ICreateFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackRepository } from '@v1Feedback/repositories';
import type { IResponseJson } from 'src/core/interfaces';

export async function createFeedbackService(
  sanitizedData: ICreateFeedback,
):Promise<IResponseJson> {
  // TODO: check for duplicate feedbacks

  // TODO: clean up the response
  // TODO: check for duplicate feedback
  // TODO: check for spam feedback
  // TODO: check for inappropriate feedback
  const createdFeedback = await v1FeedbackRepository.create(sanitizedData);

  const apiResponse: IResponseJson = {
    okay: true,
    result: createdFeedback,
  };

  return apiResponse;
}
