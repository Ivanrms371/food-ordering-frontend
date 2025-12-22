import {
  Address,
  DeliveryMethod,
  PaymentMethod,
} from "@/interfaces/checkout.interface";
import { OrderItem } from "@/interfaces/order-item.interface";
import { calculateDiscountValue } from "@/utils/currency";
import { create } from "zustand";

export interface CheckoutStore {
  selectedAddressId?: string;
  setSelectedAddressId: (addressId?: string) => void;

  address: Address;
  setAddress: (address: Address) => void;

  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (method: DeliveryMethod) => void;

  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;

  discount: {
    code?: string;
    value: number;
    type: "percentage" | "fixed";
  };

  setDiscount: (discount: {
    code?: string;
    value: number;
    type: "percentage" | "fixed";
  }) => void;

  calculateTotal: (cartSubtotal: number) => number;
}

const addressInitialValue: Address = {
  street1: "",
  street2: "",
  apartment: "",
  deliveryInstructions: "",
  saveAddress: false,
  label: "",
};

const useCheckoutStore = create<CheckoutStore>()((set, get) => ({
  deliveryMethod: "delivery",
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),

  selectedAddressId: undefined,
  setSelectedAddressId: (addressId) => set({ selectedAddressId: addressId }),

  address: addressInitialValue,
  setAddress: (address) => set({ address }),

  paymentMethod: "cash",
  setPaymentMethod: (method) => set({ paymentMethod: method }),

  discount: {
    code: undefined,
    value: 0,
    type: "percentage",
  },

  setDiscount: (discount) => set({ discount }),

  calculateTotal: (cartSubtotal) => {
    const { type, value } = get().discount;
    const discountValue = calculateDiscountValue(cartSubtotal, value, type);
    return cartSubtotal - discountValue;
  },
}));

export { useCheckoutStore };
