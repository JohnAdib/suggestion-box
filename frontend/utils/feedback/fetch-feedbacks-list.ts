import type { IResponseJson } from '@/interfaces/i-response-json';
import { convertResponseToJson } from '@/utils/fetch/convert-response-to-json';
import { getApiBase } from '@/utils/fetch/get-api-base';
import { handleApiResponseMessage } from '@/utils/fetch/handle-api-response-message';
import { handleFetchError } from '@/utils/fetch/handle-fetch-error';

export async function fetchFeedbacksList(): Promise<IResponseJson> {
  try {
    const response = await fetch(getApiBase() + '/v1/feedback', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(data),
    });

    const apiResJson: IResponseJson = await convertResponseToJson(response);
    handleApiResponseMessage(apiResJson);

    return apiResJson;
  } catch (error: any) {
    handleFetchError(error);
    throw error;
  }
}
