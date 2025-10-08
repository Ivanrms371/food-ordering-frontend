import { create } from "zustand";

interface ModalStore {
  modals: Record<string, boolean>;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  toggleModal: (modalName: string) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: {},
  openModal: (modalName) =>
    set((state) => ({ modals: { ...state.modals, [modalName]: true } })),
  closeModal: (modalName) =>
    set((state) => ({ modals: { ...state.modals, [modalName]: false } })),
  toggleModal: (modalName) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: !state.modals[modalName] },
    })),
}));
