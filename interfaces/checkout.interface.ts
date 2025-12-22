export type DeliveryMethod = "delivery" | "pickup";
export type PaymentMethod = "cash" | "card" | "online";

export type Address = {
  street1: string;
  street2: string;
  apartment: string;
  deliveryInstructions: string;
  saveAddress: boolean;
  label: string;
};
