import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/interfaces/order-item.interface";

interface CartStore {
  items: CartItem[];
  currentItem: CartItem | null;

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
      items: [],
      currentItem: null,
      openCart: false,

      isEmpty: () => get().items.length === 0,

      setCartItem: (item) => set({ currentItem: item }),

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
        const { currentItem, items, updateItemInCart } = get();
        if (!currentItem) return;

        const exists = items.findIndex(
          (i) => i.cartItemId === currentItem.cartItemId
        );
        if (exists !== -1) {
          updateItemInCart(currentItem);
        }
      },

      // helper interno para actualizar cantidad por id en el items
      updateItemQuantityById: (cartItemId: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
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
          if (!state.currentItem) return state;
          const updated = { ...state.currentItem, quantity };
          const newState = { currentItem: updated };
          get().syncCartItem();
          return newState;
        });
      },

      increaseQuantity: (cartItemId?) => {
        console.log(cartItemId);
        if (cartItemId) {
          const item = get().items.find((i) => i.cartItemId === cartItemId);
          if (!item) return;
          get().updateItemQuantityById(cartItemId, item.quantity + 1);
          return;
        }

        set((state) => {
          if (!state.currentItem) return state;
          const updated = {
            ...state.currentItem,
            quantity: state.currentItem.quantity + 1,
          };
          const newState = { currentItem: updated };
          get().syncCartItem();
          return newState;
        });
      },

      decreaseQuantity: (cartItemId?) => {
        if (cartItemId) {
          const item = get().items.find((i) => i.cartItemId === cartItemId);
          if (!item || item.quantity <= 1) return;
          get().updateItemQuantityById(cartItemId, item.quantity - 1);
          return;
        }

        set((state) => {
          if (!state.currentItem || state.currentItem.quantity <= 1)
            return state;
          const updated = {
            ...state.currentItem,
            quantity: state.currentItem.quantity - 1,
          };
          const newState = { currentItem: updated };
          get().syncCartItem();
          return newState;
        });
      },

      addItemToCart: (item) => {
        if (!item) return;
        const id = window.crypto.randomUUID();
        set((state) => ({
          items: [...state.items, { ...item, cartItemId: id }],
        }));
      },

      removeItemFromCart: (item) => {
        set((state) => ({
          items: state.items.filter(
            (currentItem) => currentItem.cartItemId !== item.cartItemId
          ),
        }));
      },

      updateItemInCart: (item) => {
        if (!item) return;
        set((state) => ({
          items: state.items.map((currentItem) =>
            currentItem.cartItemId === item.cartItemId ? item : currentItem
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getCartTotal: () =>
        get().items.reduce(
          (total, item) => total + get().calculateSubtotalItem(item),
          0
        ),

      getSubtotal: () =>
        get().items.reduce(
          (total, item) => total + item.quantity * item.priceUnit,
          0
        ),

      getCartLength: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
    }),

    {
      name: "items-storage",
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
