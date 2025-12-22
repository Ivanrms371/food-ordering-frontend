"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LyricsAnimated } from "@/components/animated/LyricsAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { fireCheckoutConfetti } from "./ui/confeti";
import { OrdersService } from "@/services/ordersService";
import { useQuery } from "@tanstack/react-query";
import { GerOrderNumberResponse, Order } from "@/interfaces/order.interface";
import { Spinner } from "@/components/ui/Spinner";
import { useCartStore } from "@/store/cart.store";
import { useRouter } from "next/navigation";
import { getUrlPaymentStatus } from "@/utils/payment";
import { SuccessIcon } from "./ui/SuccessIcon";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const externalReference = searchParams.get("external_reference");

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
    if (
      isLoading ||
      (data?.payment[0]?.status !== "approved" &&
        data?.paymentMethod === "online")
    )
      return;
    fireCheckoutConfetti();
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      setOrderData(data);
      if (
        data?.payment[0]?.status !== "approved" &&
        data?.paymentMethod === "online"
      ) {
        router.replace(
          getUrlPaymentStatus({
            paymentStatus: data?.payment[0]?.status,
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

  if (
    isLoading ||
    (data?.payment[0]?.status !== "approved" &&
      data?.paymentMethod === "online")
  )
    return (
      <Spinner
        className="flex justify-center items-center h-[calc(100vh-6rem)]"
        color="#99a1af"
        size={40}
        speedMultiplier={0.75}
      />
    );
  return (
    <>
      <div className="flex flex-col justify-center items-center  pt-10 space-y-4 h-[calc(100vh-6rem)] gap-2">
        <SuccessIcon />
        <div className="text-gray-500 font-medium">
          <LyricsAnimated text="Success!" />
        </div>
        <TextBlockAnimated
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-gray-700 text-3xl md:text-4xl font-semibold text-center">
            Thank you for your order!
          </h1>
        </TextBlockAnimated>
        <TextBlockAnimated
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500 text-center max-w-xl font-medium text-lg">
            We’re getting your meal ready and it’ll be on its way soon. Can’t
            wait for you to dig in!
          </p>
        </TextBlockAnimated>
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
              {orderData?.orderCode}
            </span>
          </div>
        </TextBlockAnimated>

        <div className="flex gap-4 mt-2">
          <TextBlockAnimated transition={{ delay: 0.7, duration: 0.5 }}>
            <Link
              href={`/orders/${orderData?.orderCode}`}
              className="button-primary"
            >
              View order
            </Link>
          </TextBlockAnimated>
          <TextBlockAnimated transition={{ delay: 0.8, duration: 0.5 }}>
            <Link href="/" className="button-secondary">
              Back to home
            </Link>
          </TextBlockAnimated>
        </div>
      </div>
    </>
  );
}
