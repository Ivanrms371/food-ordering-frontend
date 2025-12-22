"use client";

import { useAuthStore } from "@/store/auth.store";
import { OrderSummary } from "./ui/OrderSummary";
import { CheckoutForm } from "./ui/CheckoutForm";
import { CheckoutSkeleton } from "./ui/CheckoutSkeleton";
import { useEffect, useState } from "react";
import { AuthGateCheckout } from "./ui/AuthGateCheckout";

export default function CheckoutPage() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) return <CheckoutSkeleton />;

  if (!isAuthenticated) return <AuthGateCheckout />;

  return (
    <section className="container max-w-screen-xl min-h-screen py-10 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </section>
  );
}
