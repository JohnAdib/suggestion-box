import type { JSONSchemaType, Schema } from 'ajv';
import { feedbackOrderbyList, feedbackOrderList, feedbackTypesList, type IFilterListFeedback } from '../../interfaces/index.js';

export const listFeedbackSchema
: Schema | JSONSchemaType<IFilterListFeedback> =
{
  '$schema': 'http://json-schema.org/draft-07/schema#',
  'title': 'ListFeedbacks',
  'type': 'object',
  'properties': {
    'page': {
      'type': 'integer',
      'minimum': 1,
      'maximum': 1000,
    },
    'limit': {
      'type': 'integer',
      'minimum': 1,
      'maximum': 100,
    },
    'type': {
      'type': 'string',
      'enum': feedbackTypesList,
    },
    'orderby': {
      'type': 'string',
      'enum': feedbackOrderbyList,
    },
    'order': {
      'type': 'string',
      'enum': feedbackOrderList,
    },
  },
  'additionalProperties': false,
};
