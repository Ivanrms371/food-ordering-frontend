"use client";

import { useCartStore } from "@store/cart.store";
import { CartItem } from "./CartItem";
import { useRef, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export const CartList = () => {
  const { cart } = useCartStore();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const hasScroll = el.scrollHeight > el.clientHeight;
    setShowArrow(hasScroll);

    const onScroll = () => {
      if (el.scrollTop > 4) setShowArrow(false);
      else if (hasScroll) setShowArrow(true);
    };

    el.addEventListener("scroll", onScroll);

    return () => el.removeEventListener("scroll", onScroll);
  }, [cart]);

  return (
    <div ref={scrollRef} className="relative flex-1 overflow-y-auto p-5 pt-0">
      <ul className="flex flex-col relative z-0">
        <AnimatePresence>
          {cart.map((item, index) => (
            <CartItem key={item.cartItemId} item={item} index={index} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};
