export const extractIdFromUrl = (url: string): number | null => {
  if (!url) return null;
  const arr = url.split('/').filter(Boolean);
  return +arr[arr.length - 1];
};
