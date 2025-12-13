import { PopularDishResponse } from "@interfaces/dish.interface";
import { UserAddress } from "@interfaces/user.interface";
import { create } from "zustand";

interface ModalPropsMap {
  AddressModal: {
    initialData: UserAddress | null;
  };
  OrderItemModal: {};
}

interface ModalState<P> {
  isOpen: boolean;
  props: P | null;
}

interface ModalStore {
  modals: {
    [K in keyof ModalPropsMap]?: ModalState<ModalPropsMap[K]>;
  };
  openModal: <K extends keyof ModalPropsMap>(
    modalName: K,
    props?: ModalPropsMap[K]
  ) => void;
  closeModal: (modalName: keyof ModalPropsMap) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: {},
  openModal: (modalName, props) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: { isOpen: true, props } },
    })),
  closeModal: (modalName) => {
    set((state) => ({
      modals: {
        ...state.modals,
        [modalName]: {
          isOpen: false,
          props: state.modals[modalName]?.props ?? null,
        },
      },
    }));

    setTimeout(() => {
      set((state) => ({
        modals: {
          ...state.modals,
          [modalName]: {
            isOpen: false,
            props: null,
          },
        },
      }));
    }, 300);
  },
}));
