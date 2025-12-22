import {
  CreateOrder,
  GerOrderNumberResponse,
} from "@/interfaces/order.interface";
import { api, ErrorHandler } from "@/lib/axios";
import { logger } from "@/utils/logger";
import { PaymentService } from "./payment.service";
import { PaymentMethod } from "@/interfaces/checkout.interface";
import { MyOrdersResponseSchema } from "@/schemas/orderSchema";

export const OrdersService = {
  async createOrder(orderData: CreateOrder) {
    try {
      const { data } = await api.post("/orders", orderData);

      if (orderData.paymentMethod === "online") {
        return PaymentService.startOrderPayment(data.order.id);
      }

      window.location.href = `/success?external_reference=${data.order.id}`;
    } catch (error) {
      logger.error(ErrorHandler(error).error);
      return {
        success: false,
        error: ErrorHandler(error).error,
      };
    }
  },

  async getOrderCodeById(
    orderId?: string | null
  ): Promise<GerOrderNumberResponse> {
    if (!orderId) {
      throw new Error("No order id provided");
    }
    const { data } = await api.get(`/orders/code/${orderId}`);
    return data;
  },

  async cancelOrder(orderId?: string | null) {
    try {
      if (!orderId) {
        throw new Error("No order id provided");
      }
      const { data } = await api.patch(`/orders/${orderId}/cancel`);
      return data;
    } catch (error) {
      logger.error(ErrorHandler(error).error);
      return {
        success: false,
      };
    }
  },

  async updatePaymentMethod(paymentMethod: PaymentMethod, orderId?: string) {
    try {
      if (!orderId) return null;
      console.log({ paymentMethod, orderId });
      const { data } = await api.patch(`/orders/${orderId}/payment`, {
        paymentMethod: paymentMethod,
      });
      console.log(data);
      return data;
    } catch (error) {
      logger.error(ErrorHandler(error).error);
      return {
        success: false,
      };
    }
  },

  async getMyOrders() {
    const { data } = await api.get("/orders/my");
    const result = MyOrdersResponseSchema.safeParse(data);
    return result.data || [];
  },
};
