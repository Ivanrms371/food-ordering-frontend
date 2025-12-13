"use client";

import { OrderSummary } from "./ui/OrderSummary";
import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@store/cart.store";
import { CheckoutForm } from "./ui/CheckoutForm";

export default function CheckoutPage() {
  const { cart } = useCartStore();
  return (
    <section className="container max-w-screen-xl min-h-screen py-10 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: Form */}
        <CheckoutForm />

        {/* Right Column: Order Summary (Placeholder / Future Logic) */}
        <OrderSummary />
      </div>
    </section>
  );
}
