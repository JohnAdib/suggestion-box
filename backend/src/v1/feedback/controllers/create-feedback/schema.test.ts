import { validateWithSchema } from '../../../../core/validator/index.js';
import { createFeedbackSchema } from './schema.js';

describe('createFeedbackSchema', () => {
  test('should validate feedback correctly', () => {
    const mockFeedback = {
      name: 'Test User',
      email: 'testuser@example.com',
      type: 'bug',
      title: 'Test Title',
      message: 'Test Message',
    };

    const validObj = validateWithSchema({
      schema: createFeedbackSchema,
      data: mockFeedback,
    });

    expect(validObj).toEqual(mockFeedback);
  });

  it('an error when the data is invalid', () => {
    const invalidData = {};

    expect(() => validateWithSchema({
      schema: createFeedbackSchema,
      data: invalidData,
    })).toThrow();
  });

  test('error for empty value', async () => {
    const mockFeedback = {
      name: 'Test User',
      email: 'testuser@example.com',
      type: 'bug',
      title: '',
      message: 'Test Message',
    };

    expect(() => validateWithSchema({
      schema: createFeedbackSchema,
      data: mockFeedback,
    })).toThrow();
  });

  test('error for invalid email', () => {
    const mockFeedback = {
      name: 'Test User',
      email: 'invalid email',
      type: 'bug',
      title: 'Test Title',
      message: 'Test Message',
    };

    expect(() => validateWithSchema({
      schema: createFeedbackSchema,
      data: mockFeedback,
    })).toThrow();
  });

  test('error for missing message', () => {
    const mockFeedback = {
      name: 'Test User',
      email: 'testuser@example.com',
      type: 'bug',
      title: 'Test Title',
    };

    expect(() => validateWithSchema({
      schema: createFeedbackSchema,
      data: mockFeedback,
    })).toThrow();
  });

  test('error for long name', () => {
    const mockFeedback = {
      name: 'Test User'.repeat(100),
      email: 'testuser@example.com',
      type: 'bug',
      title: 'Test Title',
      message: 'Test Message',
    };

    expect(() => validateWithSchema({
      schema: createFeedbackSchema,
      data: mockFeedback,
    })).toThrow();
  });
});
