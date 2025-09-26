export const truncate = (number: number | string, decimalPlaces: number) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.floor(Number(number) * factor) / factor;
};
