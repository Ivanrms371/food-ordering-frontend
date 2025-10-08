export const formatCurrency = (value: number) => {
  const formattedNumber = value.toLocaleString('es-UY', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
    currency: "URU",
    currencyDisplay: "name"
  });

  return `$ ${formattedNumber} URU`;
};

export const calculateDiscount = (price: number, discount: number) => {
  const discountValue = (price * discount) / 100;
  const discountedPrice = price - discountValue;
  return discountedPrice;
}