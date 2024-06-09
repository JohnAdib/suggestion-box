import type { IErrors } from '@/interfaces/i-errors';
import type { IFeedbackForm } from '@/interfaces/i-feedback-form';
import swal from 'sweetalert';

export function validateFeedbackForm(
  form: IFeedbackForm,
  errors: IErrors,
): boolean {
  errors.name = '';
  errors.email = '';
  errors.type = '';
  errors.title = '';
  errors.message = '';

  let isValid = true;

  // example of blocking error
  const message = form.message?.trim();
  if (!message) {
    errors.message = 'What would you like to say? We are all ears! Please write something!';
    isValid = false;
  } else if (message.length < 10) {
    errors.message = 'Your message is too short! We would like to hear more from you!';
    isValid = false;
  }

  if (errors.message) {
    // example of error without blocking the form submission
    const title = form.title?.trim();
    if (!title) {
      errors.title = 'Title will help us categorize your feedback!';
    }
  }

  // show a user friendly alert if form is invalid
  if (!isValid) {
    swal({
      title: 'Validation Error!',
      text: 'Please check the form for any errors and try again.',
      icon: 'warning',
    });
  }
  return isValid;
}
