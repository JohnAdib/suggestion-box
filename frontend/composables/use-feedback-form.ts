import type { IErrors } from '@/interfaces/i-errors'
import type { IFeedbackForm } from '@/interfaces/i-feedback-form'
import { submitFeedbackForm } from '@/utils/submit-feedback-form'
import { validateFeedbackForm } from '@/utils/validate-feedback-form'
import { ref } from 'vue'

export default function useFeedbackForm() {
  const form = ref<IFeedbackForm>({
    name: '',
    email: '',
    type: 'bug',
    title: '',
    message: ''
  });

  const errors = ref<IErrors>({
    name: '',
    email: '',
    type: '',
    title: '',
    message: ''
  });

  const validateAndSubmit = async (): Promise<void> => {
    console.log("form", form);
    console.log("form.value", form.value);
    if (validateFeedbackForm(form.value, errors.value)) {
      await submitFeedbackForm(form.value)
      // form.value = { name: '', email: '', type: '', title: '', message: '' }
    }
  }

  return {
    form,
    errors,
    validateAndSubmit
  }
}
