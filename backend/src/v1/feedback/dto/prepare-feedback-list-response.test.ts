import { expect } from 'vitest';
import type { ISavedFeedback } from '../interfaces/index.js';
import { prepareFeedbackListResponses } from './prepare-feedback-list-response.js';

test('should prepare feedback list responses correctly', () => {
  const myDate = new Date();

  const mockSavedFeedbacks: ISavedFeedback[] = [
    {
      _id: '60f1b9b3b3f1d3f4b3b3f1d3',
      name: 'Test User 1',
      email: 'testuser1@example.com',
      type: 'bug',
      title: 'Test Title 1',
      message: 'Test Message 1',
      createdAt: myDate,
    },
    {
      _id: '60f1b9b3b3f1d3f4b3b3f1d4',
      name: 'Test User 2',
      email: 'testuser2@example.com',
      type: 'suggestion',
      title: 'Test Title 2',
      message: 'Test Message 2',
      createdAt: myDate,
    },
  ];

  const expectedResponses = [
    {
      id: '60f1b9b3b3f1d3f4b3b3f1d3',
      name: 'Test User 1',
      email: 'testuser1@example.com',
      type: 'bug',
      title: 'Test Title 1',
      message: 'Test Message 1',
      createdAt: myDate,
    },
    {
      id: '60f1b9b3b3f1d3f4b3b3f1d4',
      name: 'Test User 2',
      email: 'testuser2@example.com',
      type: 'suggestion',
      title: 'Test Title 2',
      message: 'Test Message 2',
      createdAt: myDate,
    },
  ];

  const actualResponses = prepareFeedbackListResponses(mockSavedFeedbacks);

  expect(actualResponses).toEqual(expectedResponses);
});