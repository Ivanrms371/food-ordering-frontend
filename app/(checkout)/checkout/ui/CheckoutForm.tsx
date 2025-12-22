import React, { useEffect } from "react";
import { useCheckoutStore } from "@/store/checkout.store";
import { DeliverySection } from "./DeliverySection";
import { PaymentSection } from "./PaymentSection";
import { PickupLocation } from "./PickupLocation";
import { PayButton } from "./PayButton";
import { AddressSelector } from "./AddressSelector";

export const CheckoutForm = () => {
  const { deliveryMethod } = useCheckoutStore();

  return (
    <div className="p-8 space-y-8">
      <DeliverySection />
      {deliveryMethod === "delivery" && <AddressSelector />}
      {deliveryMethod === "pickup" && <PickupLocation />}
      <PaymentSection />
      <PayButton />
    </div>
  );
};
