import { ref } from 'vue'
import { IFeedbackForm } from '@/interfaces/feedback-form'
import { IErrors } from '@/interfaces/errors'
import { validateFeedbackForm } from '@/utils/validate-feedback-form'
import { submitFeedbackForm } from '@/utils/submit-feedback-form'

export default function useFeedbackForm() {
  const form = ref<IFeedbackForm>({
    name: '',
    email: '',
    feedbackType: 'bug',
    message: ''
  })

  const errors = ref<IErrors>({
    name: '',
    email: '',
    feedbackType: '',
    message: ''
  })

  const feedbackOptions = [
    { value: 'bug', text: 'Bug' },
    { value: 'suggestion', text: 'Suggestion' }
  ]

  const validateAndSubmit = async (): Promise<void> => {
    if (validateFeedbackForm(form.value, errors.value)) {
      await submitFeedbackForm(form.value)
      form.value = { name: '', email: '', feedbackType: 'bug', message: '' }
    }
  }

  return {
    form,
    errors,
    feedbackOptions,
    validateAndSubmit
  }
}
