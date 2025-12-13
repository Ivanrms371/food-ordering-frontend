import { api } from "@lib/axios";
import { useAuthStore } from "@store/auth.store";
import { PopularDishResponse } from "@interfaces/dish.interface";
import { logger } from "@utils/logger";
import { log } from "console";
import { CustomizationCategory } from "@interfaces/customization.interface";

class DishesService {
  constructor() {}

  async getPopularDishes() {
    try {
      const { loadingPromise } = useAuthStore.getState();

      await loadingPromise;

      const { data } = await api.get("/dishes/popular", {
        withCredentials: true,
      });

      return (data as PopularDishResponse[]) ?? [];
    } catch (error) {
      logger.error(error);
    }
  }

  async getDishOptions(dishId: string) {
    try {
      const { data } = await api.get(`/customizations/dish/${dishId}/options`);

      return data as CustomizationCategory[];
    } catch (error) {
      logger.error(error);
    }
  }

  async getDishById(dishId: string) {
    try {
      const { data } = await api.get(`/dishes/${dishId}`);
      return data;
    } catch (error) {
      logger.error(error);
    }
  }
}

const dishesService = new DishesService();
export default dishesService;
