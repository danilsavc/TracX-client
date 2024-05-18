export default function formatDate(dateString) {
  const options = { day: "numeric", month: "long", hour: "numeric", minute: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("uk-UA", options);
}
