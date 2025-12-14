import { api, ErrorHandler } from "@/lib/axios";
import { logger } from "@/utils/logger";

export class DiscountsService {
  constructor() {}

  async getDiscountByCode(code: string, subtotal: number) {
    try {
      const { data } = await api.get(
        `/discounts/code/${code}?subtotal=${subtotal}`
      );
      return data;
    } catch (error) {
      logger.error(ErrorHandler(error).error);
      return {
        code: null,
        value: 0,
        type: "percentage",
      };
    }
  }
}

export const discountsService = new DiscountsService();
