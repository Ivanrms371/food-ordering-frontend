import {
  BanknotesIcon,
  CreditCardIcon,
} from "@node_modules/@heroicons/react/24/outline";
import React from "react";

export const PaymentSection = () => {
  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 mb-4">Payment</h3>
      <form action="">
        <div className="flex flex-col gap-4">
          <label className="radio-card-wrapper flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                id="payment-online"
                className="radio-card-input"
                defaultChecked
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm">
                  Mercado Pago
                </span>
                <span className="text-xs text-gray-500">
                  Pay securely online
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center w-6 h-auto gap-2 rounded-s border-gray-200">
                <img
                  src="/assets/mercadopago2.png"
                  alt="Mercado Pago"
                  className="w-6 h-auto "
                />
              </div>
            </div>
          </label>

          <label className="radio-card-wrapper flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                id="payment-card"
                className="radio-card-input"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm">
                  Card on Delivery
                </span>
                <span className="text-xs text-gray-500">
                  Pay with card when delivered
                </span>
              </div>
            </div>
            <CreditCardIcon className="size-6 text-gray-700" />
          </label>

          <label className="radio-card-wrapper flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                id="payment-cash"
                className="radio-card-input"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm">
                  Cash on Delivery
                </span>
                <span className="text-xs text-gray-500">
                  Pay with cash when delivered
                </span>
              </div>
            </div>
            <BanknotesIcon className="size-6 text-gray-700" />
          </label>
        </div>
      </form>

      <p className="text-sm mt-6 text-gray-500">
        After clicking “Pay now”, you will be redirected to the MercadoPago
        platform to complete your payment. Once the payment is confirmed, we
        will prepare and deliver your order.
      </p>
    </div>
  );
};
