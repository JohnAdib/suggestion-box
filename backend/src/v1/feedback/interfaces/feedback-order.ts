export const feedbackOrderList = [
  'asc',
  'desc',
] as const;

export type FeedbackOrderType = typeof feedbackOrderList[number];
