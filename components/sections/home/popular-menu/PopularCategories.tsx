import { BurgerIcon } from "@components/icons/BurgerIcon";
import { ChickenIcon } from "@components/icons/ChickenIcon";
import { HotDogIcon } from "@components/icons/HotDogIcon";
import { PizzaIcon } from "@components/icons/PizzaIcon";
import { SandwichIcon } from "@components/icons/SandwichIcon";

interface Category {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const CATEGORIES: Category[] = [
  {
    name: "Burgers",
    icon: BurgerIcon,
  },
  {
    name: "Pizzas",
    icon: PizzaIcon,
  },
  {
    name: "Fries & Nuggets",
    icon: ChickenIcon,
  },
  {
    name: "Hot dogs",
    icon: HotDogIcon,
  },
  {
    name: "Milanese",
    icon: SandwichIcon,
  },
];

export const PopularCategories = () => {
  return (
    <div className="flex justify-center gap-12 mt-10">
      {CATEGORIES.map(({ name, icon: FoodIcon }) => (
        <div className="flex flex-col items-center gap-2 w-40 group" key={name}>
          <FoodIcon className="size-14 group-hover:scale-125 text-neutral-400 group-hover:text-red-600 transition-all duration-300" />
          <p className="text-lg text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300">
            {name}
          </p>
        </div>
      ))}
    </div>
  );
};
