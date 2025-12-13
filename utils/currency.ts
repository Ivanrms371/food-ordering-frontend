export const formatCurrency = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// export const calculateDiscount = (price: number, discount: number) => {
//   const discountValue = (price * discount) / 100;
//   const discountedPrice = price - discountValue;
//   return discountedPrice;
// };

export const calculateDiscount = (
  value: number,
  type: "percentage" | "fixed"
) => {
  if (type === "percentage") {
    return value / 100;
  }
  return value;
};

export const calculateTotalWithDiscount = (
  price: number,
  discount: number,
  type: "percentage" | "fixed"
) => {
  const discountValue = calculateDiscount(discount, type);
  return price - discountValue;
};
