import { useModalStore } from "@store/modal.store";

export const useModal = (modalName: string) => {
  const { modals, openModal, closeModal, toggleModal } = useModalStore();

  return {
    isOpen: !!modals[modalName],
    open: () => openModal(modalName),
    close: () => closeModal(modalName),
    toggle: () => toggleModal(modalName),
  };
};
