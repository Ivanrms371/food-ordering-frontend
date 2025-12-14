import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/interfaces/order-item.interface";

interface CartStore {
  cart: CartItem[];
  cartItem: CartItem | null;

  isEmpty: () => boolean;
  setCartItem: (item: CartItem | null) => void;

  calculateSubtotalItem: (item: CartItem | null) => number;
  calculateExtrasPrice: (item: CartItem | null) => number;

  syncCartItem: () => void;

  updateItemQuantityById: (cartItemId: string, quantity: number) => void;
  setQuantity: (quantity: number, cartItemId?: string) => void;
  increaseQuantity: (cartItemId?: string) => void;
  decreaseQuantity: (cartItemId?: string) => void;

  addItemToCart: (item: CartItem | null) => void;
  removeItemFromCart: (item: CartItem) => void;
  updateItemInCart: (item: CartItem | null) => void;
  clearCart: () => void;

  getCartTotal: () => number;
  getSubtotal: () => number;
  getCartLength: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      cartItem: null,
      openCart: false,

      isEmpty: () => get().cart.length === 0,

      setCartItem: (item) => set({ cartItem: item }),

      calculateSubtotalItem: (item: CartItem | null) => {
        if (!item) return 0;
        return (
          item.quantity *
          (item.priceUnit +
            get().calculateExtrasPrice(item) -
            item.discountApplied)
        );
      },

      calculateExtrasPrice: (item: CartItem | null) => {
        if (!item) return 0;
        return item.customizationCategories.reduce(
          (total, cat) =>
            total +
            cat.customizationOptions.reduce(
              (t, opt) => t + (opt.selected ? opt.price : 0),
              0
            ),
          0
        );
      },

      syncCartItem: () => {
        const { cartItem, cart, updateItemInCart } = get();
        if (!cartItem) return;

        const exists = cart.findIndex(
          (i) => i.cartItemId === cartItem.cartItemId
        );
        if (exists !== -1) {
          updateItemInCart(cartItem);
        }
      },

      // helper interno para actualizar cantidad por id en el cart
      updateItemQuantityById: (cartItemId: string, quantity: number) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity } : item
          ),
        }));
      },

      setQuantity: (quantity, cartItemId?) => {
        if (cartItemId) {
          get().updateItemQuantityById(cartItemId, quantity);
          return;
        }

        set((state) => {
          if (!state.cartItem) return state;
          const updated = { ...state.cartItem, quantity };
          const newState = { cartItem: updated };
          get().syncCartItem();
          return newState;
        });
      },

      increaseQuantity: (cartItemId?) => {
        console.log(cartItemId);
        if (cartItemId) {
          const item = get().cart.find((i) => i.cartItemId === cartItemId);
          if (!item) return;
          get().updateItemQuantityById(cartItemId, item.quantity + 1);
          return;
        }

        set((state) => {
          if (!state.cartItem) return state;
          const updated = {
            ...state.cartItem,
            quantity: state.cartItem.quantity + 1,
          };
          const newState = { cartItem: updated };
          get().syncCartItem();
          return newState;
        });
      },

      decreaseQuantity: (cartItemId?) => {
        if (cartItemId) {
          const item = get().cart.find((i) => i.cartItemId === cartItemId);
          if (!item || item.quantity <= 1) return;
          get().updateItemQuantityById(cartItemId, item.quantity - 1);
          return;
        }

        set((state) => {
          if (!state.cartItem || state.cartItem.quantity <= 1) return state;
          const updated = {
            ...state.cartItem,
            quantity: state.cartItem.quantity - 1,
          };
          const newState = { cartItem: updated };
          get().syncCartItem();
          return newState;
        });
      },

      addItemToCart: (item) => {
        if (!item) return;
        const id = window.crypto.randomUUID();
        set((state) => ({
          cart: [...state.cart, { ...item, cartItemId: id }],
        }));
      },

      removeItemFromCart: (item) => {
        set((state) => ({
          cart: state.cart.filter(
            (cartItem) => cartItem.cartItemId !== item.cartItemId
          ),
        }));
      },

      updateItemInCart: (item) => {
        if (!item) return;
        set((state) => ({
          cart: state.cart.map((cartItem) =>
            cartItem.cartItemId === item.cartItemId ? item : cartItem
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      getCartTotal: () =>
        get().cart.reduce(
          (total, item) => total + get().calculateSubtotalItem(item),
          0
        ),

      getSubtotal: () =>
        get().cart.reduce(
          (total, item) => total + item.quantity * item.priceUnit,
          0
        ),

      getCartLength: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),
    }),

    {
      name: "cart-storage",
      partialize: (state) => ({
        cart: state.cart,
      }),
    }
  )
);
