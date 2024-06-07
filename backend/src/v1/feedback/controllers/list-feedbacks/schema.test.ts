import { validateWithSchema } from '../../../../core/validator/index.js';
import { feedbackOrderbyList } from '../../interfaces/feedback-order-by.js';
import { feedbackOrderList } from '../../interfaces/feedback-order.js';
import { feedbackTypesList } from '../../interfaces/feedback-types.js';
import { listFeedbackSchema } from './schema.js';

describe('listFeedbackSchema', () => {
  it('error when the page is less than 1', () => {
    const data = { page: 0 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the page is more than 1000', () => {
    const data = { page: 1001 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the limit is less than 1', () => {
    const data = { limit: 0 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the limit is more than 100', () => {
    const data = { limit: 101 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the type is not in feedbackTypesList', () => {
    const data = { type: 'invalidType' };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the orderby is not in feedbackOrderbyList', () => {
    const data = { orderby: 'invalidOrderby' };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the order is not in feedbackOrderList', () => {
    const data = { order: 'invalidOrder' };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).toThrow();
  });

  it('should not throw an error when the data is valid', () => {
    const data = {
      page: 1,
      limit: 1,
      type: feedbackTypesList[0],
      orderby: feedbackOrderbyList[0],
      order: feedbackOrderList[0],
    };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data,
    })).not.toThrow();
  });

  it('error when the type is not a string', () => {
    const invalidData = { type: 123 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data: invalidData as unknown,
    })).toThrow();
  });

  it('error when the orderby is not a string', () => {
    const invalidData = { orderby: 123 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data: invalidData as unknown,
    })).toThrow();
  });

  it('error when the order is not a string', () => {
    const invalidData = { order: 123 };

    expect(() => validateWithSchema({
      schema: listFeedbackSchema,
      data: invalidData as unknown,
    })).toThrow();
  });
});