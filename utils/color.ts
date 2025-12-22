import { PaymentStatus } from "@/interfaces/order.interface";
import { OrderState } from "@/schemas/orderSchema";

export const getTextColorByState = (state: OrderState) => {
  switch (state) {
    case "pending":
      return "text-amber-700";
    case "accepted":
      return "text-green-700";
    case "in_progress":
      return "text-blue-700";
    case "delivering":
      return "text-green-700";
    case "delivered":
      return "text-green-700";
    case "cancelled":
      return "text-red-700";
  }
};

export const getBgColorByState = (state: OrderState) => {
  switch (state) {
    case "pending":
      return "bg-amber-100";
    case "accepted":
      return "bg-green-100";
    case "in_progress":
      return "bg-blue-100";
    case "delivering":
      return "bg-green-100";
    case "delivered":
      return "bg-green-100";
    case "cancelled":
      return "bg-red-100";
  }
};

export const getPaymentTextColorByState = (state: PaymentStatus) => {
  switch (state) {
    case "pending":
      return "text-amber-600";
    case "approved":
      return "text-green-600";
    case "rejected":
      return "text-red-600";
    case "cancelled":
      return "text-red-600";
  }
};
