import { MercadoPago } from "@/components/icons/MercadoPago";
import { Order } from "@/schemas/orderSchema";
import { PaymentService } from "@/services/payment.service";
import {
  getBgColorByState,
  getPaymentTextColorByState,
  getTextColorByState,
} from "@/utils/color";
import { formatCurrency } from "@/utils/currency";
import {
  BanknotesIcon,
  CheckIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  order: Order;
}

export const OrderCard = ({ order }: Props) => {
  const {
    id,
    state,
    orderCode,
    // payment
    total,
    payment,
    paymentMethod,

    deliveryMethod,
    addressStreet1,
    addressStreet2,
    addressApartment,
    addressDeliveryInstructions,
  } = order;

  const showPayButton =
    (paymentMethod === "online" &&
      payment.length === 0 &&
      state !== "cancelled") ||
    (paymentMethod === "online" &&
      state !== "cancelled" &&
      payment.length > 0 &&
      payment[0]?.status === "pending");

  return (
    <li className="p-5 border border-gray-200 rounded-2xl">
      <div className="flex justify-between items-center mb-2">
        <p className=" text-gray-500 text-sm">
          Order code:{" "}
          <span className="text-gray-800 font-medium">{orderCode}</span>
        </p>
        <p
          className={twMerge(
            getBgColorByState(state),
            getTextColorByState(state),
            "font-medium text-xs px-3 py-1.5 rounded-full capitalize"
          )}
        >
          {state}
        </p>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TruckIcon className="size-5 text-gray-400" />
            <p className="text-gray-600 text-sm capitalize">{deliveryMethod}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">
              {[
                addressStreet1,
                addressApartment && `Apt ${addressApartment}`,
                addressStreet2,
              ]
                .filter(Boolean)
                .join(", ")}
            </p>

            {addressDeliveryInstructions && (
              <p className="text-gray-600 text-sm">
                Notes: {addressDeliveryInstructions}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-gray-600 text-sm flex gap-2 mb-1 justify-end">
            {paymentMethod === "online" && (
              <>
                <MercadoPago />
                Mercado Pago
              </>
            )}
            {paymentMethod === "card" && (
              <>
                <CreditCardIcon className="size-5 text-gray-700" />
                Card on Delivery
              </>
            )}
            {paymentMethod === "cash" && (
              <>
                <BanknotesIcon className="size-5 text-gray-700" />
                Cash on Delivery
              </>
            )}
          </div>
          <div className="w-fit mb-1">
            {paymentMethod === "online" && (
              <>
                {payment.length === 0 ? (
                  <div className="flex flex-col gap-2 items-end">
                    <p className="text-sm mb-2 text-red-600">Not processed</p>
                  </div>
                ) : (
                  <p
                    className={twMerge(
                      getPaymentTextColorByState(payment[0]?.status),
                      "font-medium text-sm flex items-center gap-0.5  rounded-full capitalize"
                    )}
                  >
                    {payment[0]?.status}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <button type="button" className="button-secondary text-xs py-2">
            View order
          </button>
          {showPayButton && (
            <button
              type="button"
              className="button-primary text-xs py-2"
              onClick={() => {
                PaymentService.startOrderPayment(order.id);
              }}
            >
              Pay now
            </button>
          )}
        </div>
        <p className="text-sm font-medium text-gray-500">
          Total: <span className="text-gray-800">{formatCurrency(total)}</span>
        </p>
      </div>
    </li>
  );
};
