import {
  Address,
  DeliveryMethod,
  PaymentMethod,
} from "@/interfaces/checkout.interface";
import { calculateDiscountValue } from "@/utils/currency";
import { create } from "zustand";

export interface CheckoutStore {
  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (method: DeliveryMethod) => void;

  address: Address;
  setAddress: (address: Address) => void;

  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;

  discount: {
    code: string | null;
    value: number;
    type: "percentage" | "fixed";
  };

  setDiscount: (discount: {
    code: string | null;
    value: number;
    type: "percentage" | "fixed";
  }) => void;

  calculateTotal: (cartSubtotal: number) => number;
}

const addressInitialValue: Address = {
  street1: "",
  street2: "",
  apartment: "",
  phoneNumber: "",
  instructions: "",
  saveAddress: false,
};

const useCheckoutStore = create<CheckoutStore>()((set, get) => ({
  deliveryMethod: "delivery",
  setDeliveryMethod: (method: DeliveryMethod) =>
    set({ deliveryMethod: method }),

  address: addressInitialValue,
  setAddress: (address: Address) => set({ address }),

  paymentMethod: "cash",
  setPaymentMethod: (method: PaymentMethod) => set({ paymentMethod: method }),

  discount: {
    code: null,
    value: 0,
    type: "percentage",
  },

  setDiscount: (discount: {
    code: string | null;
    value: number;
    type: "percentage" | "fixed";
  }) => set({ discount }),

  calculateTotal: (cartSubtotal) => {
    const { type, value } = get().discount;
    const discountValue = calculateDiscountValue(cartSubtotal, value, type);
    return cartSubtotal - discountValue;
  },
}));

export { useCheckoutStore };
