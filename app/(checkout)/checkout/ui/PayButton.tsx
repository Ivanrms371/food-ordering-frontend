import React from "react";
import { useCheckoutStore } from "@/store/checkout.store";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";

export const PayButton = () => {
  const { paymentMethod } = useCheckoutStore();
  const { getCartTotal } = useCartStore();

  if (paymentMethod === "online")
    return (
      <button className="button-primary w-full">
        Pay {formatCurrency(getCartTotal())}
      </button>
    );

  return (
    <button className="button-primary w-full">
      Confirm {formatCurrency(getCartTotal())}
    </button>
  );
};
