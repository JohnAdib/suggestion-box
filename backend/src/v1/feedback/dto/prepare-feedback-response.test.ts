import { expect } from 'vitest';
import type { ISavedFeedback } from '../interfaces/index.js';
import { prepareFeedbackResponse } from './prepare-feedback-response.js';

test('should prepare feedback response correctly', () => {
  const mockSavedFeedback: ISavedFeedback = {
    _id: '60f1b9b3b3f1d3f4b3b3f1d3',
    name: 'Test User',
    email: '   testuser@example.com',
    type: 'bug',
    title: 'Test Title ',
    message: 'Test Message',
    createdAt: new Date(),
  };

  const expectedResponse = {
    id: mockSavedFeedback._id?.toString(),
    name: mockSavedFeedback.name?.trim(),
    email: mockSavedFeedback.email?.trim(),
    type: mockSavedFeedback.type?.trim(),
    title: mockSavedFeedback.title?.trim(),
    message: mockSavedFeedback.message?.trim(),
    createdAt: mockSavedFeedback.createdAt,
  };

  const actualResponse = prepareFeedbackResponse(mockSavedFeedback);

  expect(actualResponse).toEqual(expectedResponse);
});
