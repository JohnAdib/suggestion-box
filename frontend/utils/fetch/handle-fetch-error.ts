import swal from 'sweetalert';

export function handleFetchError(error: Error) {
  const defaultMsg = 'Something went wrong! Please try again.';
  const errorMessage = error.message || defaultMsg;

  swal({
    title: 'Error on communication with server!',
    text: errorMessage,
    icon: 'error',
  });
}
