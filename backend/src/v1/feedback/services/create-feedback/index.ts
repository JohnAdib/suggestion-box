import { error } from '../../../../core/errors/index.js';
import type { IResponseJson } from '../../../../core/interfaces/index.js';
import { prepareFeedbackResponse } from '../../dto/prepare-feedback-response.js';
import type { ICreateFeedback } from '../../interfaces/index.js';
import { v1FeedbackRepository } from '../../repositories/index.js';


export async function createFeedbackService(
  inputData: ICreateFeedback,
):Promise<IResponseJson> {
  // check for duplicate message
  const duplicateMessageCount = await v1FeedbackRepository
    .numberOfDuplicateMessage({ message: inputData.message });
  if (duplicateMessageCount) {
    throw new error.client
      .Conflict("It seems like I've read this feedback before...")
      .setTitle('Deja vu!');
  }

  // prevent spamming by checking recent activity
  const recentActivityWithinMinutes = 1;
  const emailRecentActivityCount = await v1FeedbackRepository
    .numberOfEmailRecentActivity({
      email: inputData.email,
      minutes: recentActivityWithinMinutes,
    });
  if (emailRecentActivityCount) {
    throw new error.client
      .TooManyRequests("Whoa there, Speedy Gonzales! Let's take a breather, shall we?")
      .setTitle('Hold Your Horses!');
  }

  // create feedback
  const createdFeedback = await v1FeedbackRepository.create(inputData);
  const formattedFeedback = prepareFeedbackResponse(createdFeedback);

  const apiResponse: IResponseJson = {
    okay: true,
    result: formattedFeedback,
  };

  return apiResponse;
}
