export const formatCurrency = (value: number) => {
  return value.toLocaleString("es-UY", {
    style: "currency",
    currency: "UYU",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const calculateDiscount = (price: number, discount: number) => {
  const discountValue = (price * discount) / 100;
  const discountedPrice = price - discountValue;
  return discountedPrice;
};
