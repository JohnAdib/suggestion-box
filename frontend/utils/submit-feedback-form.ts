import { IFeedbackForm } from '@/interfaces/feedback-form'

export async function submitFeedbackForm(form: IFeedbackForm): Promise<boolean> {
  try {
    const response = await fetch('/v1/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    alert('Feedback submitted successfully!')
    return true
  } catch (error) {
    console.error(error)
    alert('An error occurred while submitting your feedback.')
    return false
  }
}
