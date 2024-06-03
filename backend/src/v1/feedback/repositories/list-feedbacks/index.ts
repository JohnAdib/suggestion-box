import type {
  IListFeedback,
  ISavedFeedback,
} from '@v1Feedback/interfaces';
import { feedbackModel } from '@v1Feedback/models';
import { buildQuery } from './build-query';
import { buildSimplePagination } from './build-simple-pagination';
import { buildSort } from './build-sort';

export const listFeedbacks =
async ({ page, limit, type, orderby, order }: IListFeedback)
: Promise<ISavedFeedback[]> => {
  const query = buildQuery({ type });
  const sort = buildSort({ orderby, order });
  // TODO: if we have a lot of data, we should consider using a cursor-based pagination
  const skip = buildSimplePagination({ page, limit });

  return feedbackModel.find(query)
    .sort(sort)
    .skip(skip)
    .limit(limit);

};
