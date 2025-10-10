export const dateFormat = (date) => {
  const options = { weekday: 'short', month: 'long', day: 'numeric',hour:'numeric',minute:'numeric'};
  return new Date(date).toLocaleDateString(undefined, options);
}