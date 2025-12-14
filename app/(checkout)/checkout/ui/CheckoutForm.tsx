import React from "react";
import { useCheckoutStore } from "@/store/checkout.store";
import { DeliverySection } from "./DeliverySection";
import { PaymentSection } from "./PaymentSection";
import { PickupLocation } from "./PickupLocation";
import { ShippingAddressForm } from "./ShippingAddressForm";
import { PayButton } from "./PayButton";

export const CheckoutForm = () => {
  const { deliveryMethod } = useCheckoutStore();
  return (
    <div className="p-8 space-y-8">
      <DeliverySection />
      {deliveryMethod === "delivery" && <ShippingAddressForm />}
      {deliveryMethod === "pickup" && <PickupLocation />}
      <PaymentSection />
      <PayButton />
    </div>
  );
};
