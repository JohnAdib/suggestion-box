import type { JSONSchemaType, Schema } from 'ajv';
import type { IGetFeedback } from '../../interfaces/i-get-feedback.js';

export const getFeedbackSchema: Schema | JSONSchemaType<IGetFeedback> = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  'title': 'getFeedbacks',
  'type': 'object',
  'properties': {
    'id': {
      'type': 'string',
      'minLength': 24,
      'maxLength': 24,
    },
  },
  required: [
    'id',
  ],
  'additionalProperties': false,
};
