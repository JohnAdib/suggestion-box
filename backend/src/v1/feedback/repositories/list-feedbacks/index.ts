import type { IListFeedback } from '../../interfaces/i-list-feedback.js';
import type { ISavedFeedback } from '../../interfaces/i-saved-feedback.js';
import { feedbackModel } from '../../models/index.js';
import { buildQuery } from './build-query.js';
import { buildSimplePagination } from './build-simple-pagination.js';
import { buildSort } from './build-sort.js';

export const listFeedbacks =
async ({ page, limit, type, orderby, order }: IListFeedback)
: Promise<ISavedFeedback[] | null> => {
  const query = buildQuery({ type });
  const sort = buildSort({ orderby, order });
  // TODO: if we have a lot of data, we should consider using a cursor-based pagination
  const skip = buildSimplePagination({ page, limit });

  return feedbackModel.find(query)
    .sort(sort)
    .skip(skip)
    .limit(limit);
};
