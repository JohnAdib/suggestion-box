import type { FeedbackOrderbyType, FeedbackOrderType, FeedbackTypesType } from './index.js';

export interface IFilterListFeedbackFilter {
  type: FeedbackTypesType;
}

export interface IFilterListFeedbackSort {
  orderby: FeedbackOrderbyType;
  order: FeedbackOrderType;
}

export interface IFilterListFeedbackPagination {
  page: number;
  limit: number;
}

export interface IFilterListFeedback extends
  IFilterListFeedbackFilter,
  IFilterListFeedbackSort,
  IFilterListFeedbackPagination
{}
