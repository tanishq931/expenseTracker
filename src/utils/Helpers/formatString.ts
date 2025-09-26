export const formatString = (str: string): string => {
  if (!str) return '';
  // Replace multiple spaces with a single space
  str = str.replace(/\s+/g, ' ').trim();
  // Capitalize the first letter of each word
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}