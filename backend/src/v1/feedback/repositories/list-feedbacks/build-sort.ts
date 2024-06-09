import type { SortOrder } from 'mongoose';
import type { IFilterListFeedbackSort } from '../../interfaces/index.js';

interface IBuildSort {
  [key: string]: SortOrder
}

export const buildSort =
  ({ orderby, order }: IFilterListFeedbackSort): IBuildSort => {
    let myFilter: string = orderby;

    if (orderby === 'date') {
      myFilter = 'createdAt';
    }

    const orderValue = order === 'desc' ? -1 : 1;
    const sortBy: IBuildSort = {
      [myFilter]: orderValue,
    };

    return sortBy;
  };
