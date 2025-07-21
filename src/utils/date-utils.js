// Format date to a readable string
export const formatDate = (
  date,
  options = { year: "numeric", month: "long", day: "numeric" }
) => {
  return new Date(date).toLocaleDateString(undefined, options);
};

// Format time to a readable string
export const formatTime = (
  date,
  options = { hour: "2-digit", minute: "2-digit" }
) => {
  return new Date(date).toLocaleTimeString(undefined, options);
};

// Get time difference between two dates
export const timeDifference = (date1, date2) => {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes };
};

// Format date time
export const formatDateTimeToLocale = (
  utcDateString,
  locale = "en-IN",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }
) => {
  const date = new Date(utcDateString);
  return date.toLocaleString(locale, options);
}; // Example usage: // formatDateToLocale("2024-08-24T14:30:00Z"); // "8/24/2024, 2:30:00 PM"
