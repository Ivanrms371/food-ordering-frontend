import {
  CustomizationCategory,
  CustomizationOption,
} from "@/interfaces/customization.interface";
import { twMerge } from "tailwind-merge";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { Checkbox } from "@/components/ui/Checkbox";

interface Props {
  customizationCategories: CustomizationCategory[];
}

export const CustomizationOptions = ({ customizationCategories }: Props) => {
  const { currentItem, setCartItem } = useCartStore();

  const onOptionChange = (
    category: CustomizationCategory,
    option: CustomizationOption
  ) => {
    const updatedCart = currentItem?.customizationCategories.map((cat) => {
      if (cat.id === category.id) {
        const updatedOptions = cat.customizationOptions.map((opt) => {
          if (opt.id === option.id) {
            return {
              ...opt,
              selected: !opt.selected,
            };
          }
          return opt;
        });
        return {
          ...cat,
          customizationOptions: updatedOptions,
        };
      }
      return cat;
    });

    if (updatedCart && currentItem) {
      setCartItem({
        ...currentItem,
        customizationCategories: updatedCart,
      });
    }
  };

  return (
    <div className="mt-6">
      {customizationCategories?.map((category) => {
        const { maxSelections } = category;
        const selectionHint = !maxSelections
          ? "(multiple selections)"
          : maxSelections === 1
          ? "(single selection)"
          : "(limit " + maxSelections + " selections)";
        return (
          <div key={category.id}>
            <TextBlockAnimated
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-xl text-gray-800 font-semibold">
                {category.label}
                <span className="text-gray-500 text-base ml-1 font-medium">
                  {selectionHint}
                </span>
              </h3>
            </TextBlockAnimated>
            <div>
              {category.customizationOptions.map((option, index) => (
                <ElementAnimated
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + 0.05 * index }}
                  className="border-b border-gray-200 transition-colors duration-300 group last:border-b-0"
                >
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className="flex cursor-pointer justify-between items-center py-3"
                  >
                    <div className="flex gap-2 items-center transition group-hover:translate-x-2">
                      <Checkbox
                        id={option.id}
                        onChange={() => onOptionChange(category, option)}
                        checked={option.selected}
                      />
                      <span
                        className={twMerge(
                          "text-gray-500 group-hover:text-gray-700 transition-colors duration-300",
                          option.selected && "text-gray-700"
                        )}
                      >
                        {option.label}
                      </span>
                    </div>
                    <span
                      className={twMerge(
                        "text-gray-500 group-hover:text-gray-700 transition-colors duration-300",
                        option.selected && "text-gray-700"
                      )}
                    >
                      + {formatCurrency(option.price)}
                    </span>
                  </label>
                </ElementAnimated>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
