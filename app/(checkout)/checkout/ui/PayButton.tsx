import React from "react";
import { useCheckoutStore } from "@/store/checkout.store";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";
import { CheckoutService } from "@/services/checkout.service";

export const PayButton = () => {
  const { paymentMethod, calculateTotal } = useCheckoutStore();
  const { getCartTotal } = useCartStore();

  const total = calculateTotal(getCartTotal());

  const handlePay = () => {
    CheckoutService.placeOrder();
  };

  if (paymentMethod === "online")
    return (
      <button className="button-primary w-full" onClick={handlePay}>
        Pay {formatCurrency(total)}
      </button>
    );

  return (
    <button className="button-primary w-full" onClick={handlePay}>
      Confirm {formatCurrency(total)}
    </button>
  );
};
