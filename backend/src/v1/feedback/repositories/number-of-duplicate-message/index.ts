import { feedbackModel } from '@v1Feedback/models';

export const numberOfDuplicateMessage =
async ({ message }: { message: string })
: Promise<number> => {
  const duplicateMessageRecords = await feedbackModel.find({
    message,
  });

  return duplicateMessageRecords.length;
};
