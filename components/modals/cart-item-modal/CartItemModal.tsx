"use client";

import Modal from "../../ui/Modal";
import { CartItem } from "@/interfaces/order-item.interface";
import { useModalStore } from "@/store/modal.store";
import dishesService from "@/services/dishes/dishesService";
import { DishDisplay } from "./DishDisplay";
import { CustomizationOptions } from "./CustomizationOptions";
import { NotesInput } from "./NotesInput";
import { useCartUIStore } from "@/store/cart-ui.store";
import { useCartStore } from "@/store/cart.store";
import { QuantitySelector } from "./QuantitySelector";
import { SubtotalDisplay } from "./SubtotalDisplay";
import { CartItemActions } from "./CartItemActions";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/isMobile";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";

const itemInitialState: CartItem = {
  dish: null,
  quantity: 1,
  priceUnit: 0,
  discountApplied: 0,
  notes: "",
  customizationCategories: [],
};

export const CartItemModal = () => {
  const {
    openCart,
    hasInteracted,
    setHasInteracted,
    shouldOpenCart,
    setShouldOpenCart,
  } = useCartUIStore();
  const {
    modals: { OrderItemModal },
    closeModal,
  } = useModalStore();
  const isMobile = useIsMobile();

  const {
    cartItem,
    setCartItem,
    decreaseQuantity,
    increaseQuantity,
    addItemToCart,
    updateItemInCart,
  } = useCartStore();

  const isOpen = OrderItemModal?.isOpen ?? false;
  const isEditing = (cartItem?.cartItemId?.length ?? 0) > 0;

  const { data: options } = useQuery({
    queryKey: ["dish-options", cartItem?.dish?.id ?? ""],
    queryFn: () => dishesService.getDishOptions(cartItem?.dish?.id ?? ""),
    enabled: !!cartItem?.dish && !isEditing,
  });

  const dish = cartItem?.dish ?? null;

  useEffect(() => {
    if (!dish || !options || isEditing) return;

    setCartItem({
      ...itemInitialState,
      dish,
      priceUnit: dish.price,
      customizationCategories: options.map((cat) => ({
        ...cat,
        customizationOptions: cat.customizationOptions.map((option) => ({
          ...option,
          selected: false,
        })),
      })),
      quantity: 1,
      discountApplied: dish.discountApplied ?? 0,
    });
  }, [dish, options, setCartItem]);

  const handleClose = () => {
    closeModal("OrderItemModal");
    setTimeout(() => {
      if (shouldOpenCart) {
        openCart();
        setShouldOpenCart(false);
      }
      setCartItem(null);
    }, 150);
  };

  const handleAddToCart = () => {
    addItemToCart(cartItem);
    closeModal("OrderItemModal");
    if (!hasInteracted) {
      openCart();
      setHasInteracted(true);
    }
  };

  const handleUpdateItemInCart = () => {
    updateItemInCart(cartItem);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="3xl">
      <DishDisplay isMobile={isMobile} dish={dish} />
      <CustomizationOptions
        customizationCategories={cartItem?.customizationCategories ?? []}
      />
      <NotesInput />

      <div className="sticky -bottom-6 bg-white pb-4 flex flex-col ">
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex justify-between gap-4">
            <div className="flex gap-4 items-center">
              <TextBlockAnimated
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label htmlFor="quantity" className="font-medium text-gray-500">
                  Quantity
                </label>
              </TextBlockAnimated>

              <QuantitySelector
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                cartItem={cartItem}
              />
            </div>
            <SubtotalDisplay />
          </div>
        </div>

        <CartItemActions
          onClose={handleClose}
          addItemToCart={handleAddToCart}
          updateItemInCart={handleUpdateItemInCart}
        />
      </div>
    </Modal>
  );
};
