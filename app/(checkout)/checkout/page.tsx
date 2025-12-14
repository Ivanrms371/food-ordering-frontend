"use client";

import { OrderSummary } from "./ui/OrderSummary";
import { useCartStore } from "@/store/cart.store";
import { CheckoutForm } from "./ui/CheckoutForm";

export default function CheckoutPage() {
  const { cart } = useCartStore();
  return (
    <section className="container max-w-screen-xl min-h-screen py-10 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </section>
  );
}
