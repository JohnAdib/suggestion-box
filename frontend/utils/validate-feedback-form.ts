import { FeedbackForm, IErrors } from '@/interfaces/feedback-form'
import { validEmail } from '@/utils/validate-email'

export function validateFeedbackForm(form: FeedbackForm, errors: IErrors): boolean {
  errors.name = ''
  errors.email = ''
  errors.feedbackType = ''
  errors.message = ''

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!validEmail(form.email)) {
    errors.email = 'Email is not valid'
    isValid = false
  }

  if (!form.feedbackType.trim()) {
    errors.feedbackType = 'Feedback Type is required'
    isValid = false
  }

  if (!form.title.trim()) {
    errors.title = 'Title is required'
    isValid = false
  }


  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}


