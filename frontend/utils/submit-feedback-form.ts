import type { IFeedbackForm } from "@/interfaces/i-feedback-form";
import swal from 'sweetalert';

export async function submitFeedbackForm(form: IFeedbackForm)
  : Promise<boolean> {
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

    const data = await response.json();
    swal({
      title: "Good job!",
      text: "Feedback submitted successfully!",
      icon: "success",
    });
    console.log("apiResponse", data);
    return data;
  } catch (error: any) {
    const defaultMsg = "Something went wrong! Please try again.";
    const errorMessage = error.message || defaultMsg;

    swal({
      title: "Error on Sending Feedback!",
      text: errorMessage,
      icon: "error",
    });
    return false
  }
}
