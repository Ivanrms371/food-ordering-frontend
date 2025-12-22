import { api, ErrorHandler } from "@/lib/axios";
import { logger } from "@/utils/logger";

export const discountService = {
  async getDiscountByCode(code: string, subtotal: number) {
    try {
      const normalizedCode = code.toUpperCase();
      const { data } = await api.get(
        `/discounts/code/${normalizedCode}?subtotal=${subtotal}`
      );
      return {
        ...data,
        success: true,
      };
    } catch (error) {
      logger.error(ErrorHandler(error).error);
      return {
        code: null,
        value: 0,
        type: "percentage",
        success: false,
      };
    }
  },
};
