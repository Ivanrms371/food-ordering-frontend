import { BanknotesIcon, CreditCardIcon } from "@heroicons/react/24/outline";

interface Props {
  selectedMethod: "online" | "card" | "cash";
  onChange: (method: "online" | "card" | "cash") => void;
}

export default function PaymentMethodList({ selectedMethod, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <MercadoPagoMethod selectedMethod={selectedMethod} onChange={onChange} />
      <CardMethod selectedMethod={selectedMethod} onChange={onChange} />
      <CashMethod selectedMethod={selectedMethod} onChange={onChange} />
    </div>
  );
}

export const MercadoPagoMethod = ({ selectedMethod, onChange }: Props) => {
  return (
    <label className="radio-card-wrapper flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="paymentMethod"
          id="payment-online"
          className="radio-card-input"
          value={"online"}
          checked={selectedMethod === "online"}
          onChange={() => onChange("online")}
        />
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 text-sm">
            Mercado Pago
          </span>
          <span className="text-xs text-gray-500">Pay securely online</span>
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
  );
};

export const CardMethod = ({ selectedMethod, onChange }: Props) => {
  return (
    <label className="radio-card-wrapper flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="paymentMethod"
          id="payment-card"
          className="radio-card-input"
          value={"card"}
          checked={selectedMethod === "card"}
          onChange={() => onChange("card")}
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
  );
};

export const CashMethod = ({ selectedMethod, onChange }: Props) => {
  return (
    <label className="radio-card-wrapper flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="paymentMethod"
          id="payment-cash"
          className="radio-card-input"
          value={"cash"}
          checked={selectedMethod === "cash"}
          onChange={() => onChange("cash")}
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
  );
};
