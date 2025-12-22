import { OrderItem } from "./order-item.interface";

type Address = {
  street1?: string;
  street2?: string;
  apartment?: string;
  instructions?: string;
  saveAddress?: boolean;
  label?: string;
};
type DeliveryMethod = "pickup" | "delivery";
type PaymentMethod = "cash" | "card" | "online";

export type CreateOrder = {
  addressId?: string;
  addressData?: Address;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
  items: OrderItem[];
  code?: string;
};

export type PaymentStatus = "approved" | "pending" | "rejected" | "cancelled";

export type Order = {};

export type GetOrderResponse = {
  success: boolean;
};

export type GerOrderNumberResponse = {
  orderCode: string;
  paymentMethod: PaymentMethod;
  state: string;
  isPaid: boolean;
  deliveryMethod: DeliveryMethod;
  payment: {
    status: PaymentStatus;
  }[];
};
