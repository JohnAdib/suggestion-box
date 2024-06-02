import type {
  IListFeedbackFilter,
  ISavedFeedback,
} from '@v1Feedback/interfaces';

export const buildQuery =
({ type }: IListFeedbackFilter)
: Partial<ISavedFeedback> => {
  const query: Partial<ISavedFeedback> = {};
  if (type) {
    query.type = type;
  }
  return query;
};
