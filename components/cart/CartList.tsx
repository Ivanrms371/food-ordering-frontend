"use client";

import { AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart.store";
import { CartItem } from "./CartItem";
import { CartItem as CartItemType } from "@/interfaces/order-item.interface";

interface Props {
  onEdit: (item: CartItemType) => void;
}

export const CartList = ({ onEdit }: Props) => {
  const { cart } = useCartStore();

  console.log(cart);
  return (
    <div className="relative flex-1 overflow-y-auto p-5 pt-0">
      <ul className="flex flex-col relative z-0">
        <AnimatePresence>
          {cart.map((item, index) => (
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
