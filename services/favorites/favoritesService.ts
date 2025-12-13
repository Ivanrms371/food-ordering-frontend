import { api } from "@lib/axios";
import { logger } from "@utils/logger";

class FavoritesService {
  constructor() {}

  async getFavorites() {
    try {
      const res = await api.get("/favorites");
      return res.data;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  async addFavorite(dishId: string): Promise<boolean> {
    try {
      await api.post("/favorites", { dishId });
      return true;
    } catch (error) {
      logger.error("addFavorite error", error);
      return false;
    }
  }

  async removeFavorite(dishId: string): Promise<boolean> {
    try {
      await api.delete(`/favorites/${dishId}`);
      return true;
    } catch (error) {
      logger.error("removeFavorite error", error);
      return false;
    }
  }
}

const favoritesService = new FavoritesService();
export default favoritesService;
