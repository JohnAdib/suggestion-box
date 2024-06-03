export const feedbackTypesList = [
  'bug',
  'suggestion',
] as const;

export type FeedbackTypesType = typeof feedbackTypesList[number];
