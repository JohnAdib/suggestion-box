export interface IFeedbackResponse {
  id: string;
  name?: string;
  email?: string;
  type: 'bug' | 'suggestion'
  title?: string;
  message: string;
  createdAt: Date;
}
