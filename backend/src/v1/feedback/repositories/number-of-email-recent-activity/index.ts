import { error } from '../../../../core/errors/index.js';
import { feedbackModel } from '../../models/index.js';

export interface INumberOfEmailRecentActivity {
  email: string;
  minutes: number;
}

export const numberOfEmailRecentActivity = async ({
  email,
  minutes,
}: INumberOfEmailRecentActivity): Promise<number> => {
  const oneMinute = minutes * 60 * 1000;
  const recentDate = new Date(new Date().getTime() - oneMinute);

  try {
    const duplicateMessageRecords = await feedbackModel.find({
      email,
      createdAt: {
        $gte: recentDate,
      },
    });

    return duplicateMessageRecords.length;
  } catch (err) {
    throw new error.client.Database(err);
  }
};
