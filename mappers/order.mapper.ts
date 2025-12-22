import { CartItem, OrderItem } from "@/interfaces/order-item.interface";

export const mapCartItemToOrderItem = (cartItem: CartItem): OrderItem => {
  return {
    dishId: cartItem.dish?.id ?? "",
    quantity: cartItem.quantity,
    notes: cartItem.notes,
    customizationOptions: cartItem.customizationCategories
      .map((cat) =>
        cat.customizationOptions
          .map((opt) => (opt.selected ? opt.id : undefined))
          .filter((opt) => opt !== undefined)
      )
      .flatMap((opt) => opt),
  };
};
