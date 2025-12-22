"use client";

import { AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart.store";
import { CartItem } from "./CartItem";
import { CartItem as CartItemType } from "@/interfaces/order-item.interface";

interface Props {
  onEdit: (item: CartItemType) => void;
}

export const CartList = ({ onEdit }: Props) => {
  const { items } = useCartStore();

  console.log(items);
  return (
    <div className="relative flex-1 overflow-y-auto p-5 pt-0">
      <ul className="flex flex-col relative z-0">
        <AnimatePresence>
          {items.map((item, index) => (
            <CartItem
              key={item.cartItemId}
              item={item}
              index={index}
              onEdit={onEdit}
            />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
