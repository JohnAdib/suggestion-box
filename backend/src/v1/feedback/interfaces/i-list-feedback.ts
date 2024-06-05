import type { FeedbackOrderbyType, FeedbackOrderType, FeedbackTypesType } from './index.js';

export interface IListFeedbackFilter {
  type: FeedbackTypesType;
}

export interface IListFeedbackSort {
  orderby: FeedbackOrderbyType;
  order: FeedbackOrderType;
}

export interface IListFeedbackPagination {
  page: number;
  limit: number;
}

export interface IListFeedback extends
  IListFeedbackFilter,
  IListFeedbackSort,
  IListFeedbackPagination
{}
