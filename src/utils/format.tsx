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

export const formatSecondsToTime = (seconds: number) => {
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;
  return [hours, minutes, seconds % 60]
    .map((value) => `0${Math.floor(value)}`.slice(-2))
    .join(':');
};

export const formatSecondsToTimeMinutes = (seconds: number) => {
  const minutes = (seconds % 3600) / 60;
  return [minutes, seconds % 60]
    .map((value) => `0${Math.floor(value)}`.slice(-2))
    .join(':');
};
