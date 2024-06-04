import type { IListFeedbackFilter, ISavedFeedback } from "../../interfaces/index.js";


export const buildQuery =
({ type }: IListFeedbackFilter)
: Partial<ISavedFeedback> => {
  const query: Partial<ISavedFeedback> = {};
  if (type) {
    query.type = type;
  }
  return query;
};
