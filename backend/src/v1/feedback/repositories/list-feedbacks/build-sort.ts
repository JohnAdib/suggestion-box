import type { SortOrder } from 'mongoose';
import type { FeedbackOrderbyType, IFilterListFeedbackSort } from '../../interfaces/index.js';

interface IBuildSort {
  [key: string]: SortOrder
}

export const buildSort =
({ orderby, order }: IFilterListFeedbackSort)
:IBuildSort => {
  const myFilter: FeedbackOrderbyType = orderby;

  const orderValue = order === 'desc' ? -1 : 1;
  const sortBy: IBuildSort = {
    [myFilter]: orderValue,
  };

  return sortBy;
};
