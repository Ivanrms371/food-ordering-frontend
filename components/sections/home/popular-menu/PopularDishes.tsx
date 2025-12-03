"use client";

import dishesService from "@services/dishes/dishesService";
import { useEffect, useState } from "react";
import { DishSummary } from "@interfaces/dish.interface";
import { formatCurrency } from "@utils/currency";

export const PopularDishes = () => {
  const [popularDishes, setPopularDishes] = useState<DishSummary[]>([]);

  useEffect(() => {
    const fetchPopularDishes = async () => {
      const popularDishes = await dishesService.getPopularDishes();
      setPopularDishes(popularDishes ?? []);
    };
    fetchPopularDishes();
  }, []);

  console.log(popularDishes);

  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-10">
        {popularDishes.map((dish) => (
          <div
            key={dish.id}
            className="flex items-center gap-6 group p-6 rounded-3xl hover:bg-neutral-100 transition-colors duration-300 cursor-pointer"
          >
            <img
              src={"/images/1.jpg"}
              alt=""
              className="size-32 min-w-32 min-h-32 rounded-full"
            />
            <div className="flex flex-col gap-2 text-left w-full">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-neutral-900 font-mono">
                  {dish.name}
                </h3>
                <hr className="flex-1 border-t border-neutral-300 border-dashed" />
                <p className="text-2xl font-bold text-neutral-800 font-mono">
                  {formatCurrency(dish.price)}
                </p>
              </div>
              <p className="text-neutral-600">{dish.description}</p>

              <button type="button" className="button-primary w-fit ml-auto">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
