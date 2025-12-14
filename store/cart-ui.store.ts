import { create } from "zustand";

interface CartUIStore {
  isCartOpen: boolean;
  hasInteracted: boolean;
  shouldOpenCart: boolean;

  setShouldOpenCart: (value: boolean) => void;
  setHasInteracted: (value: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartUIStore = create<CartUIStore>((set) => ({
  isCartOpen: false,
  hasInteracted: false,
  shouldOpenCart: false,

  setShouldOpenCart: (value: boolean) => set({ shouldOpenCart: value }),
  setHasInteracted: (value: boolean) => set({ hasInteracted: value }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));
