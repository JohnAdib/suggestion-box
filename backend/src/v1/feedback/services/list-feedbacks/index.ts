import { error } from '@errors';
import type { IListFeedback, ISavedFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackRepository } from '@v1Feedback/repositories';

export async function listFeedbacksService(
  inputData: IListFeedback,
): Promise<ISavedFeedback[]> {
  const feedbacks = await v1FeedbackRepository.list(inputData);

  // if the feedbacks are found, return them
  if (feedbacks.length) {
    return feedbacks;
  }

  // if there are no filter and no feedbacks means there are no feedbacks at all!
  if (Object.keys(inputData).length === 0) {
    throw new error.client.NotFound('It seems our feedback box is feeling lonely. Could you drop a line?');
  }

  throw new error.client.NotFound('No feedback found with the given criteria');
}
