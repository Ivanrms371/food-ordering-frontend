import { CreateOrder } from "@/interfaces/order.interface";
import { mapCartItemToOrderItem } from "@/mappers/order.mapper";
import { useCartStore } from "@/store/cart.store";
import { useCheckoutStore } from "@/store/checkout.store";
import { OrdersService } from "./ordersService";

export const CheckoutService = {
  placeOrder: () => {
    const cart = useCartStore.getState();
    const checkout = useCheckoutStore.getState();

    const items = cart.items.map(mapCartItemToOrderItem);
    const {
      selectedAddressId: addressId,
      address: addressData,
      deliveryMethod,
      paymentMethod,
      discount: { code },
    } = checkout;
    const orderData: CreateOrder = {
      items,
      deliveryMethod,
      paymentMethod,
      code,
      addressData,
      addressId,
    };

    return OrdersService.createOrder(orderData);
  },
};
