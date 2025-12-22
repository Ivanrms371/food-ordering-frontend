import { api } from "@/lib/axios";

export const PaymentService = {
  async startOrderPayment(orderId: string) {
    try {
      console.log(orderId);
      const { data } = await api.post(`/payments/order/${orderId}/preference`);
      window.location.href = data;
    } catch (error) {
      console.log(error);
    }
  },
};
