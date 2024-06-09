import type { IResponseJson } from '@/interfaces/i-response-json';
import { convertResponseToJson } from '@/utils/fetch/convert-response-to-json';
import { getApiBase } from '@/utils/fetch/get-api-base';
import { handleApiResponseMessage } from '@/utils/fetch/handle-api-response-message';
import { handleFetchError } from '@/utils/fetch/handle-fetch-error';

export async function fetchFeedbackById(
  id: string | string[] | undefined,
): Promise<IResponseJson> {
  if (!id) {
    throw new Error('Invalid id!' + id);
  }
  if (Array.isArray(id)) {
    throw new Error('Please provide a single id!');
  }

  try {
    const apiUrl = getApiBase() + '/v1/feedback/' + id;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const apiResJson: IResponseJson = await convertResponseToJson(response);
    handleApiResponseMessage(apiResJson);

    return apiResJson;
  } catch (error: any) {
    handleFetchError(error);
    throw error;
  }
}
