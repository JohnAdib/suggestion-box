import { feedbackModel } from "../../models/index.js";

export const numberOfDuplicateMessage =
async ({ message }: { message: string })
: Promise<number> => {
  const duplicateMessageRecords = await feedbackModel.find({
    message,
  });

  return duplicateMessageRecords.length;
};
