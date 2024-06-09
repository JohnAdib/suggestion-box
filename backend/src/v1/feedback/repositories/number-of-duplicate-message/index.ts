import { error } from '../../../../core/errors/index.js';
import { feedbackModel } from '../../models/index.js';

export const numberOfDuplicateMessage =
  async ({ message }: { message: string }): Promise<number> => {
    try {
      const duplicateMessageRecords = await feedbackModel.find({ message });
      return duplicateMessageRecords.length;
    } catch (err) {
      throw new error.client.Database(err);
    }

  };
