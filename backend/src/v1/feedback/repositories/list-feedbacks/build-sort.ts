import type {
  FeedbackOrderbyType,
  IListFeedbackSort,
} from '@v1Feedback/interfaces';
import type { SortOrder } from 'mongoose';

interface IBuildSort {
  [key: string]: SortOrder
}

export const buildSort =
({ orderby, order }: IListFeedbackSort)
:IBuildSort => {
  const myFilter: FeedbackOrderbyType = orderby || 'date';

  const orderValue = order === 'desc' ? -1 : 1;
  const sortBy: IBuildSort = {
    [myFilter]: orderValue,
  };

  return sortBy;
};
