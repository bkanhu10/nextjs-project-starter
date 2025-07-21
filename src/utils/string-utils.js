// Capitalize the first letter of a string
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Truncate a string to a specified length
export const truncate = (str, length) => {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + "...";
};

// Convert a string to a slug
export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

// Convert a string to a title case
export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Get name initials
export const nameInitials = (fullName) => {
  const splitedName = fullName.split(" ");
  console.log(fullName.split(" "));
  let firstName;
  let lastName;
  if (splitedName.length > 1) {
    firstName = splitedName[0];
    lastName = splitedName[splitedName.length - 1];
    return firstName?.charAt(0) + lastName?.charAt(0);
  } else {
    firstName = splitedName[0].charAt(0);
    lastName = "";
  }
  return firstName + lastName;
};

// Capitalize first character
export const formatFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
