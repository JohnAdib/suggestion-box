import type { IListFeedback, ISavedFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackRepository } from '@v1Feedback/repositories';

export async function listFeedbacksService(
  validatedData: IListFeedback,
): Promise<ISavedFeedback[]> {
  const feedbacks = await v1FeedbackRepository.list(validatedData);

  // TODO: if no feedbacks found then return an error message
  if (feedbacks.length === 0) {
    // apiResponse.okay = false;
    // apiResponse.messages = [{
    //   type: 'error',
    //   title: 'No feedback found',
    //   msg: 'No feedback found with the given criteria',
    // }];
    throw new Error('No feedback found with the given criteria');
  }

  return feedbacks;
}
