import React from "react";
import { DeliverySection } from "./DeliverySection";
import { PaymentSection } from "./PaymentSection";
import { ShippingAddressForm } from "./ShippingAddressForm";
import { PayButton } from "./PayButton";

export const CheckoutForm = () => {
  return (
    <div className="p-8 space-y-8">
      <DeliverySection />
      <ShippingAddressForm />
      <PaymentSection />
      <PayButton />
    </div>
  );
};
