import { CartItem as CartItemType } from "@/interfaces/order-item.interface";
import { ArrowDownIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart.store";
import { formatCurrency } from "@/utils/currency";
import React, { Fragment } from "react";
import { QuantitySelector } from "@/components/modals/cart-item-modal/QuantitySelector";
import { useModalStore } from "@/store/modal.store";
import { useCartUIStore } from "@/store/cart-ui.store";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { ListItemAnimated } from "@/components/animated/ListItemAnimated";

interface Props {
  item: CartItemType;
  index: number;
  onEdit: (item: CartItemType) => void;
}

export const CartItem = ({ item, index, onEdit }: Props) => {
  const {
    calculateSubtotalItem,
    decreaseQuantity,
    increaseQuantity,
    removeItemFromCart,
  } = useCartStore();

  const hasCustomizations = item.customizationCategories?.some((category) =>
    category.customizationOptions?.some((option) => option.selected === true)
  );

  return (
    <ListItemAnimated
      key={item.cartItemId}
      className="py-6 border-b last:border-b-0 border-gray-200 overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      exit={{
        opacity: 0,
        x: 20,
        transition: { duration: 0.3, delay: 0 },
      }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
    >
      <div className="flex">
        <div className="size-24 shrink-0 overflow-hidden rounded-xl shadow-md">
          <img src="/images/1.jpg" alt="" className="size-full object-cover" />
        </div>
        <div className="ml-4 w-full">
          <div>
            <div className="flex justify-between  items-center">
              <TextBlockAnimated
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
              >
                <h3 className="text-lg text-gray-900 font-medium">
                  {item.dish?.name}
                </h3>
              </TextBlockAnimated>
              <TextBlockAnimated
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.2 }}
              >
                <p className="text-lg font-bold text-gray-700 font-mono flex justify-start flex-row gap-2 items-center">
                  {formatCurrency(calculateSubtotalItem(item))}
                </p>
              </TextBlockAnimated>
            </div>
            <TextBlockAnimated
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 + index * 0.2 }}
            >
              <p className="font-bold text-gray-700 font-mono flex justify-start flex-row gap-2 items-center">
                {(item?.dish?.discountApplied ?? 0) > 0 ? (
                  <>
                    <span className="line-through text-gray-500">
                      {formatCurrency(item?.priceUnit ?? 0)}
                    </span>
                    <span>
                      {formatCurrency(item?.dish?.discountPrice ?? 0)}
                    </span>
                  </>
                ) : (
                  formatCurrency(item?.priceUnit ?? 0)
                )}
              </p>
            </TextBlockAnimated>

            {hasCustomizations ? (
              <ul className="flex flex-col">
                {item.customizationCategories?.map((category) => (
                  <Fragment key={category.id}>
                    <ul key={category.id} className="flex flex-col">
                      {category.customizationOptions?.map(
                        (option, optionIndex) => {
                          if (option.selected) {
                            return (
                              <ListItemAnimated
                                key={option.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay:
                                    0.15 + index * 0.1 + optionIndex * 0.05,
                                }}
                                className="text-xs text-gray-500"
                              >
                                {option.label} (+ {formatCurrency(option.price)}
                                )
                              </ListItemAnimated>
                            );
                          }
                          return null;
                        }
                      )}
                    </ul>
                  </Fragment>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No extras</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <button
          className=" text-gray-700 flex items-center text-sm gap-2"
          type="button"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>

        <div className="flex items-center gap-4">
          <QuantitySelector
            decreaseQuantity={() => decreaseQuantity(item.cartItemId)}
            increaseQuantity={() => increaseQuantity(item.cartItemId)}
            currentItem={item}
          />
          <ElementAnimated
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15 + index * 0.1 }}
          >
            <button
              type="button"
              onClick={() => {
                removeItemFromCart(item);
              }}
              className="cursor-pointer size-5 text-gray-500 hover:text-gray-700"
            >
              <TrashIcon />
            </button>
          </ElementAnimated>
        </div>
      </div>
    </ListItemAnimated>
  );
};
