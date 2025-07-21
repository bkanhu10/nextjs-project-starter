// Format a number with commas as thousands separators
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Convert a number to a currency format
export const formatCurrency = (amount, currency = "INR", locale = "en-IN") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

// Convert a number to a percentage format
export const formatPercentage = (num) => {
  return `${(num * 100).toFixed(2)}%`;
};

// Style a number in percentage format
export const stylePercentage = (num) => {
  return `${num.toFixed(2)}%`;
};
