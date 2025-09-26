export const getFormattedAmount = (amount: number) => {
  let result = amount.toLocaleString('US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  return result;
};
