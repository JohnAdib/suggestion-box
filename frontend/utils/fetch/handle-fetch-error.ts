import swal from 'sweetalert';

export function handleFetchError(error: Error) {
  const defaultMsg = 'Something went wrong! Please try again.';
  const errorMessage = error.message || defaultMsg;

  swal({
    title: 'Communication Error!',
    text: errorMessage,
    icon: 'error',
  });
}
