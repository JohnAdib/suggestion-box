import type {
  JSONSchemaType,
  Schema,
  ValidateFunction,
} from 'ajv';
import { Ajv } from 'ajv';
import addFormats from 'ajv-formats';
import { error } from '../errors/index.js';
import { ajvTransformValidationErrors } from './transform-validation-errors.js';

interface IvalidateWithSchema<T> {
  schema: Schema | JSONSchemaType<T>;
  data: T;
  combineErrors?: boolean;
}

/**
 * @description Validate data with a schema using Ajv
 * @param schema - schema to validate data against
 * @param data - data to validate
 * @param combineErrors - combine all errors into one message
 * @returns validated data
 */
export const validateWithSchema =
  <T>({ schema, data, combineErrors }: IvalidateWithSchema<T>): T => {
    const ajv = new Ajv({
      allErrors: true,
      coerceTypes: true,
    });
    addFormats.default(ajv);

    const validateFunction: ValidateFunction<T> = ajv.compile(schema);

    const valid = validateFunction(data);

    if (valid) {
      return data;
    }

    const errorsMessages = ajvTransformValidationErrors({
      validate: validateFunction,
      combineErrors,
    });

    throw new error.client.ValidationGroupMessages(errorsMessages);
  };
