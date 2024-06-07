import { validateWithSchema } from '../../../../core/validator/index.js';
import { getFeedbackSchema } from './schema.js';

describe('getFeedbackSchema', () => {
  it('error when the id is missing', () => {
    const data = {};

    expect(() => validateWithSchema({
      schema: getFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the id is less than 24 characters', () => {
    const data = { id: 'shortid' };

    expect(() => validateWithSchema({
      schema: getFeedbackSchema,
      data,
    })).toThrow();
  });

  it('error when the id is more than 24 characters', () => {
    const data = { id: 'thisisaverylongidthatismorethan24characters' };

    expect(() => validateWithSchema({
      schema: getFeedbackSchema,
      data,
    })).toThrow();
  });

  it('should not throw an error when the id is exactly 24 characters', () => {
    const data = { id: 'thisisavalididwith24char' };

    expect(() => validateWithSchema({
      schema: getFeedbackSchema,
      data,
    })).not.toThrow();
  });
});