import type { IListFeedbackPagination } from '../../interfaces/index.js';

export const buildSimplePagination =
({ page, limit }: IListFeedbackPagination)
: number => {
  if (!page || !limit) {
    return 0;
  }
  // page is starting from 1 so we need to minus 1
  const pageMinusOne = page - 1;
  // skip the previous pages
  return pageMinusOne * limit;
};
