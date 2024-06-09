import swal from 'sweetalert';
import type { IResponseJson } from '~/interfaces/i-response-json';

export async function convertResponseToJson(
  response: Response,
): Promise<IResponseJson> {
  try {
    const apiResponseJson: IResponseJson = await response.json();
    return apiResponseJson;
  } catch (error: any) {
    const errorMessage = error.message || 'Error parsing response from server!';
    swal({
      title: 'Error on response parsing!',
      text: errorMessage,
      icon: 'error',
    });
    throw new Error(errorMessage);
  }
}