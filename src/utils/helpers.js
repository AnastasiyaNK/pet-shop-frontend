export const calculateDiscountPercent = (price, discontPrice) => {
  if (!discontPrice) return 0;
  return Math.round(((price - discontPrice) / price) * 100);
};