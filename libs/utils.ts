export const validateString = (value: unknown, maxLenghth?: number) => {
  if (!maxLenghth) return;

  if (!value || typeof value !== "string" || value.length > maxLenghth) {
    return false;
  }
  return true;
};
