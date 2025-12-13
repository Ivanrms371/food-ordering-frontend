import { create } from "zustand";

interface CartUIStore {
  isCartOpen: boolean;
  hasInteracted: boolean;

  openCart: () => void;
  closeCart: () => void;
}

export const useCartUIStore = create<CartUIStore>((set) => ({
  isCartOpen: false,
  hasInteracted: false,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));
