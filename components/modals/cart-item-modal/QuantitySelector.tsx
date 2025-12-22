import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { CartItem } from "@/interfaces/order-item.interface";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
  currentItem: CartItem | null;
}

export const QuantitySelector = ({
  decreaseQuantity,
  increaseQuantity,
  currentItem,
}: Props) => {
  return (
    <div className="flex gap-8">
      <ElementAnimated
        className="flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <button
          type="button"
          onClick={() => decreaseQuantity()}
          className="rounded-full p-1 size-6 bg-gray-100 hover:bg-gray-200 transition relative cursor-pointer"
        >
          <MinusIcon className="size-4 text-gray-800 z-10" />
        </button>

        <div className="h-6 w-10 text-center bg-gray-100 outline-none rounded-full text-sm flex justify-center items-center">
          {currentItem?.quantity ?? 1}
        </div>

        <button
          type="button"
          onClick={() => increaseQuantity()}
          className="rounded-full p-1 size-6 bg-gray-100 hover:bg-gray-200 transition relative cursor-pointer"
        >
          <PlusIcon className="size-4 text-gray-800 z-10" />
        </button>
      </ElementAnimated>
    </div>
  );
};
