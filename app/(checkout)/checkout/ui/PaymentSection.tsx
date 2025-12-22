import { useCheckoutStore } from "@/store/checkout.store";
import PaymentMethodList from "@/components/ui/PaymentMethods";

export const PaymentSection = () => {
  const { paymentMethod, setPaymentMethod } = useCheckoutStore();

  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 mb-4">Payment</h3>
      <PaymentMethodList
        selectedMethod={paymentMethod}
        onChange={setPaymentMethod}
      />

      {paymentMethod === "online" ? (
        <p className="text-sm mt-6 text-gray-500">
          After clicking “Pay”, you will be redirected to MercadoPago to
          securely complete your payment. Once the payment is confirmed, we will
          prepare and deliver your order.
        </p>
      ) : (
        <p className="text-sm mt-6 text-gray-500">
          After clicking “Confirm, we will start preparing your order and
          deliver it as soon as it’s ready.
        </p>
      )}
    </div>
  );
};
