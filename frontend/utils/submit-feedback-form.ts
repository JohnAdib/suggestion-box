import type { IFeedbackForm } from '@/interfaces/i-feedback-form';
import swal from 'sweetalert';

export async function submitFeedbackForm(form: IFeedbackForm)
  : Promise<boolean> {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    const response = await fetch(apiBase + '/v1/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    let apiResponseJson;
    try {
      apiResponseJson = await response.json();
    } catch (error) {
      swal({
        title: 'Error on Sending Feedback!',
        text: 'Error parsing response from server!',
        icon: 'error',
      });
      return false;
    }
    const alertIcon = apiResponseJson.okay ? 'success' : 'error';

    // TODO: move to a separate function and handle multiple messages
    const firstMessage = apiResponseJson.messages?.[0];
    swal({
      title: firstMessage.title,
      text: firstMessage.msg,
      icon: alertIcon,
    });

    return apiResponseJson;
  } catch (error: any) {
    const defaultMsg = 'Something went wrong! Please try again.';
    const errorMessage = error.message || defaultMsg;

    swal({
      title: 'Error on Sending Feedback!',
      text: errorMessage,
      icon: 'error',
    });
    return false;
  }
}
