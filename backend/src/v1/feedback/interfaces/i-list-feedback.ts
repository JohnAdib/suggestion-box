import type { FeedbackOrderType } from './feedback-order';
import type { FeedbackOrderbyType } from './feedback-order-by';
import type { FeedbackTypesType } from './feedback-types';

export interface IListFeedbackFilter {
  type?: FeedbackTypesType;
}

export interface IListFeedbackSort {
  orderby?: FeedbackOrderbyType;
  order?: FeedbackOrderType;
}

export interface IListFeedbackPagination {
  page?: number;
  limit?: number;
}

export interface IListFeedback extends
  IListFeedbackFilter,
  IListFeedbackSort,
  IListFeedbackPagination
{}
