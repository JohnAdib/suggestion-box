import type { IFeedbackForm } from '@/interfaces/i-feedback-form';
import type { IResponseJson } from '~/interfaces/i-response-json';
import { convertResponseToJson } from './fetch/convert-response-to-json';
import { getApiBase } from './fetch/get-api-base';
import { handleApiResponseMessage } from './fetch/handle-api-response-message';
import { handleFetchError } from './fetch/handle-fetch-error';

export async function submitFeedbackForm(form: IFeedbackForm)
  : Promise<IResponseJson> {
  try {
    const response = await fetch(getApiBase() + '/v1/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const apiResJson: IResponseJson = await convertResponseToJson(response);
    handleApiResponseMessage(apiResJson);

    return apiResJson;
  } catch (error: any) {
    handleFetchError(error);
    throw error;
  }
}
