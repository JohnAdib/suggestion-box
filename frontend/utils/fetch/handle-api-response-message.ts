import swal from 'sweetalert';
import type { IResponseJson } from '~/interfaces/i-response-json';
import type { IResponseJsonMessage } from '~/interfaces/i-response-json-message';

export function handleApiResponseMessage(
  apiResJson: IResponseJson,
): void {
  const alertIcon = apiResJson.okay ? 'success' : 'error';
  const firstMessage: IResponseJsonMessage | undefined =
    apiResJson.messages?.[0];

  if (!firstMessage || !firstMessage?.msg) {
    return;
  }

  swal({
    title: firstMessage?.title,
    text: firstMessage?.msg,
    icon: alertIcon,
  });
}