export type FeedbackTypeTypes = 'bug' | 'suggestion';

export interface IFeedbackType {
  value: FeedbackTypeTypes;
  text: string;
}

export const feedbackTypes: IFeedbackType[] = [
  { value: 'bug', text: 'Bug' },
  { value: 'suggestion', text: 'Suggestion' },
];
