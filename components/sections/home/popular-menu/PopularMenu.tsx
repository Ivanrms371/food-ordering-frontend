import { PopularCategories } from "./PopularCategories";
import { PopularDishes } from "./PopularDishes";

export const PopularMenu = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <p className="uppercase text-red-600 font-bold mb-4 ">
            - Our Best Dishes -
          </p>
          <h2 className="text-7xl font-mono text-neutral-900 font-black mb-2">
            Popular Menu
          </h2>
          <p className="text-xl text-gray-500">Every choice is a delight.</p>

          <PopularCategories />

          <PopularDishes />
        </div>
      </div>
    </section>
  );
};
