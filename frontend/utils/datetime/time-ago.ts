export function timeAgo(date: string | number | Date | undefined) {
  if (!date) {
    return '';
  }

  const currentDate = new Date().getTime();
  const dateToCompare = new Date(date).getTime();
  const seconds = Math.floor((currentDate - dateToCompare) / 1000);
  const year = 31536000;
  let interval = seconds / year;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  return Math.floor(seconds) + ' seconds ago';
}
