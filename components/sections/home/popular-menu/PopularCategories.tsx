import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";
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
    <div className="flex flex-wrap flex-row justify-center gap-8 md:gap-4 mt-10 py-4 px-8 bg-gray-100 rounded-full">
      {CATEGORIES.map(({ name, icon: FoodIcon }, index) => (
        <div
          className="flex flex-col items-center lg:w-32 w-28 group"
          key={name}
        >
          {/* <ElementAnimated
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <FoodIcon className="size-12 flex-1 group-hover:scale-125 text-gray-400 group-hover:text-red-600 transition-all duration-300" />
          </ElementAnimated> */}
          <TextBlockAnimated
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
          >
            <p className="text-sm lg:text-base text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
              {name}
            </p>
          </TextBlockAnimated>
        </div>
      ))}
    </div>
  );
};
