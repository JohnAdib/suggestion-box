import type { JSONSchemaType, Schema } from 'ajv';
import type { IFilterGetFeedback } from '../../interfaces/index.js';

export const getFeedbackSchema: Schema | JSONSchemaType<IFilterGetFeedback> = {
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
