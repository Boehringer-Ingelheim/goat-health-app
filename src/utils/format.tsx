export const decreaseValue = (
  value: string | number,
  count: number = 1,
): string => {
  const result = Number(value) - count;
  return result.toString().padStart(2, '0');
};

export const increaseValue = (
  value: string | number,
  count: number = 1,
): string => {
  const result = Number(value) + count;
  return result.toString().padStart(2, '0');
};
