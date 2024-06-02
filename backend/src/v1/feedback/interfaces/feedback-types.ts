export const feedbackTypesList = [
  'Bug',
  'Suggestion',
] as const;

export type FeedbackTypesType = typeof feedbackTypesList[number];
