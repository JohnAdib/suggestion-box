import type { IResponseJsonMessage } from '@interfaces';
import type { ValidateFunction } from 'ajv';

interface AjvTransformValidationErrorsInterface {
  validate: ValidateFunction;
  combineErrors?: boolean;
}

/**
 * @description
 * Transform Ajv validation errors into a user friendly format
 * based on IResponseJsonMessage interface
 */
export function ajvTransformValidationErrors({
  validate,
  combineErrors = true,
}: AjvTransformValidationErrorsInterface,
): IResponseJsonMessage[] {
  const errorsMessages: IResponseJsonMessage[] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validate.errors?.map((error: any) => {

      // get the field name from the error object
      const instantPath = error?.instancePath.replace('/', '');
      let fieldName: string = '';
      if (error.params.missingProperty) {
        fieldName = error.params.missingProperty;
      } else if (instantPath) {
        fieldName = instantPath;
      } else if (error.params.additionalProperty) {
        fieldName = error.params.additionalProperty;
      }

      const myErr: IResponseJsonMessage = {
        type: 'path',
        msg: error.message ?? '',
        path: fieldName,
      };
      return myErr;
    }) ?? [];

  if (errorsMessages.length === 0) {
    return [];
  }

  if (!combineErrors) {
    return errorsMessages;
  }

  const userFriendlyMessageObj: IResponseJsonMessage = {
    type: 'error',
    title: 'Validation Error',
    msg: 'Please check your input and try again!',
  };
  // add a user friendly message
  errorsMessages.unshift(userFriendlyMessageObj);

  return errorsMessages;
}
