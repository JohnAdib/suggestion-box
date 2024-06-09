import type { IErrors } from '@/interfaces/i-errors';
import type { IFeedbackForm } from '@/interfaces/i-feedback-form';
import { submitFeedbackForm } from '@/utils/feedback/submit-feedback-form';
import { validateFeedbackForm } from '@/utils/validate/validate-feedback-form';
import { ref } from 'vue';

export default function useFeedbackForm() {
  const emptyForm: IFeedbackForm = {
    name: undefined,
    email: undefined,
    type: 'bug',
    title: undefined,
    message: '',
  };

  const emptyErrors: IErrors = {
    name: '',
    email: '',
    type: '',
    title: '',
    message: '',
  };

  // sperad the empty form and errors to avoid reference sharing
  const form = ref<IFeedbackForm>({ ...emptyForm });
  const errors = ref<IErrors>({ ...emptyErrors });

  const resetForm = (): void => {
    // reset the form and errors to their initial values
    form.value = { ...emptyForm };
    errors.value = { ...emptyErrors };
  };

  const validateAndSubmit = async (): Promise<void> => {
    if (validateFeedbackForm(form.value, errors.value)) {
      const apiResponseJson = await submitFeedbackForm(form.value);

      // if the form was submitted successfully, reset the form and errors
      if (apiResponseJson && apiResponseJson.okay) {
        resetForm();
      }
    }
  };

  return {
    form,
    errors,
    validateAndSubmit,
    resetForm,
  };
}
