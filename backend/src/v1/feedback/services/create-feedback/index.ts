import type { ICreateFeedback, ISavedFeedback } from '@v1Feedback/interfaces';
import { v1FeedbackRepository } from '@v1Feedback/repositories';

export async function createFeedbackService(
  sanitizedData: ICreateFeedback,
):Promise<ISavedFeedback> {
  // TODO: check for duplicate feedbacks

  // TODO: clean up the response
  // TODO: check for duplicate feedback
  // TODO: check for spam feedback
  // TODO: check for inappropriate feedback
  const createdFeedback = await v1FeedbackRepository.create(sanitizedData);

  return createdFeedback;
}
