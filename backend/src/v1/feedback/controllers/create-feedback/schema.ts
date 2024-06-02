import { feedbackTypesList, type ICreateFeedback } from '@v1Feedback/interfaces';
import type { JSONSchemaType, Schema } from 'ajv';

export const createFeedbackSchema: Schema | JSONSchemaType<ICreateFeedback> = {
  '$schema': 'http://json-schema.org/draft-07/schema#',
  'title': 'CreateFeedback',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string',
      'minLength': 1,
      'maxLength': 100,
    },
    'email': {
      'type': 'string',
      'format': 'email',
      'minLength': 6,
      'maxLength': 254,
    },
    'type': {
      'type': 'string',
      'enum': feedbackTypesList,
    },
    'title': {
      'type': 'string',
      'minLength': 1,
      'maxLength': 100,
    },
    'message': {
      'type': 'string',
      'minLength': 1,
      'maxLength': 10000,
    },
  },
  'required': [
    'name',
    'email',
    'type',
    'title',
    'message',
  ],
  'additionalProperties': false,
};
