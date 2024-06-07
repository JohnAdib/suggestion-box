import type { IFilterListFeedbackFilter, ISavedFeedback } from '../../interfaces/index.js';

export const buildQuery =
({ type }: IFilterListFeedbackFilter)
: Partial<ISavedFeedback> => {
  const query: Partial<ISavedFeedback> = {};
  if (type) {
    query.type = type;
  }
  return query;
};
