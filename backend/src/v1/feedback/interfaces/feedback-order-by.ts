export const feedbackOrderbyList = [
  'date',
  'name',
] as const;

export type FeedbackOrderbyType = typeof feedbackOrderbyList[number];
