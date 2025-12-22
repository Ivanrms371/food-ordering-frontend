"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LyricsAnimated } from "@/components/animated/LyricsAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { OrdersService } from "@/services/ordersService";
import { useQuery } from "@tanstack/react-query";
import { GerOrderNumberResponse } from "@/interfaces/order.interface";
import { Spinner } from "@/components/ui/Spinner";
import { useCartStore } from "@/store/cart.store";
import { useRouter } from "next/navigation";
import { getUrlPaymentStatus } from "@/utils/payment";
import { PaymentService } from "@/services/payment.service";
import { useModalStore } from "@/store/modal.store";

export default function FailurePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const externalReference = searchParams.get("external_reference");

  const { openModal } = useModalStore();
  const { clearCart } = useCartStore();
  const [orderData, setOrderData] = useState<GerOrderNumberResponse | null>(
    null
  );

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["order", externalReference],
    queryFn: () => OrdersService.getOrderCodeById(externalReference),
  });

  useEffect(() => {
    clearCart();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setOrderData(data);
      if (data.state !== "cancelled") {
        router.replace(
          getUrlPaymentStatus({
            orderState: data?.state,
            externalReference,
          })
        );
      }
    }
    if (isError) {
      router.replace("/");
    }
  }, [data, isSuccess, isError]);

  if (isLoading) {
    return (
      <Spinner
        className="flex justify-center items-center h-[calc(100vh-6rem)]"
        color="#99a1af"
        size={40}
        speedMultiplier={0.75}
      />
    );
  }

  return (
    <div className="flex flex-col justify-center items-center pt-10 space-y-4 h-[calc(100vh-6rem)] gap-2">
      <motion.div
        initial={{ backgroundColor: "#fff", scale: 0.5 }}
        animate={{ backgroundColor: "#fee2e2", scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="p-5 w-fit rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-red-700"
        >
          <motion.path
            d="M6 6 L18 18"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.path
            d="M6 18 L18 6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
      <div className="text-gray-500 font-medium">
        <LyricsAnimated
          text={
            orderData?.state === "cancelled"
              ? "Order Cancelled"
              : "Payment Cancelled"
          }
        />
      </div>
      <TextBlockAnimated
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-gray-700 text-3xl md:text-4xl font-semibold text-center">
          Oops! Your order was cancelled
        </h1>
      </TextBlockAnimated>
      <TextBlockAnimated
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray-500 text-center max-w-2xl font-medium text-lg">
          Unfortunately, this order cannot be reactivated. If you want, you can
          place a new order or contact support for help.
        </p>
      </TextBlockAnimated>
      {orderData && (
        <TextBlockAnimated
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-1.5 items-center"
        >
          <p className="text-gray-500 text-center max-w-md font-medium">
            Order
          </p>
          <div className="flex gap-0.5">
            <span className="text-gray-500 font-medium">#</span>
            <span className="text-gray-700 font-medium">
              {orderData.orderCode}
            </span>
          </div>
        </TextBlockAnimated>
      )}
      <div className="flex gap-4 mt-2">
        <TextBlockAnimated transition={{ delay: 0.8, duration: 0.5 }}>
          <Link href="/" className="button-secondary">
            Back to home
          </Link>
        </TextBlockAnimated>
      </div>
    </div>
  );
}
