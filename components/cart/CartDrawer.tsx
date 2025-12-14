"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartUIStore } from "@/store/cart-ui.store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartList } from "./CartList";
import { OrderSummary } from "./OrderSummary";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { useCartStore } from "@/store/cart.store";
import Link from "next/link";
import { useModalStore } from "@/store/modal.store";
import { CartItem } from "@/interfaces/order-item.interface";

export const CartDrawer = () => {
  const { isCartOpen, closeCart, setShouldOpenCart } = useCartUIStore();
  const { isEmpty, setCartItem, cart } = useCartStore();
  const { openModal } = useModalStore();

  const [showEmpty, setShowEmpty] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  useEffect(() => {
    if (cart.length === 0) {
      const timeout = setTimeout(() => {
        setShowEmpty(true);
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      setShowEmpty(false);
    }
  }, [cart.length]);

  const onEdit = (item: CartItem) => {
    closeCart();
    openModal("OrderItemModal");
    setCartItem(item);
    setShouldOpenCart(true);
  };

  return (
    <AnimatePresence mode="sync">
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 z-40 w-full h-full bg-gray-900/50 cursor-pointer backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 overflow-y-auto z-50 max-w-[600px] w-[calc(100%-2rem)] h-full bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-5">
              <TextBlockAnimated
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h2 className="text-2xl text-gray-800 font-medium ">
                  Your Cart
                </h2>
              </TextBlockAnimated>
              <ElementAnimated
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <button
                  type="button"
                  onClick={closeCart}
                  className="rounded-full p-2 size-9 order-1 bg-gray-100 hover:bg-gray-200 transition relative cursor-pointer"
                >
                  <XMarkIcon className="size-5 text-gray-800 z-10" />
                </button>
              </ElementAnimated>
            </div>

            {showEmpty ? (
              <div className="flex flex-col items-center justify-center flex-1">
                <TextBlockAnimated
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <p className="text-gray-500 text-lg">
                    Oops! Your cart is empty.
                  </p>
                </TextBlockAnimated>
                <ElementAnimated
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  viewport={{ amount: 0.5, once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    href="/menu"
                    className="text-gray-800 font-medium cursor-pointer"
                  >
                    Continue Shopping
                  </Link>
                </ElementAnimated>
              </div>
            ) : (
              <>
                <CartList onEdit={onEdit} />
                <OrderSummary />
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
