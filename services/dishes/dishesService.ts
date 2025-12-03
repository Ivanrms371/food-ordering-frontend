import { DishSummary } from "@interfaces/dish.interface";
import { api } from "@lib/axios";

export class DishesService {
  constructor() {}

  async getPopularDishes() {
    try {
      const { data } = await api.get("/dishes/popular");
      return (data as DishSummary[]) ?? [];
    } catch (error) {
      console.log(error);
    }
  }
}

const dishesService = new DishesService();
export default dishesService;
