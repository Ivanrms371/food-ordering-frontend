"use client";

import dishesService from "@services/dishes/dishesService";
import { useEffect, useState } from "react";
import { PopularDishResponse } from "@interfaces/dish.interface";
import { DishList } from "@components/dishes/DishList";

export const PopularDishes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularDishes, setPopularDishes] = useState<PopularDishResponse[]>([]);

  useEffect(() => {
    const fetchPopularDishes = async () => {
      setIsLoading(true);
      const popularDishes = await dishesService.getPopularDishes();
      setPopularDishes(popularDishes ?? []);
      setIsLoading(false);
    };
    fetchPopularDishes();
  }, []);

  return (
    <div className="mt-16">
      <DishList dishes={popularDishes} isLoading={isLoading} />
    </div>
  );
};
