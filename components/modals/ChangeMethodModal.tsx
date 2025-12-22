"use client";
import Modal from "@/components/ui/Modal";
import PaymentMethodList from "../ui/PaymentMethods";
import { useState } from "react";
import { useModalStore } from "@/store/modal.store";
import { OrdersService } from "@/services/ordersService";

export const ChangeMethodModal = () => {
  const { modals, closeModal } = useModalStore();
  const isOpen = modals?.ChangeMethodModal?.isOpen ?? false;

  const [selectedMethod, setSelectedMethod] = useState<
    "online" | "card" | "cash"
  >("online");

  const handleCloseModal = () => {
    closeModal("ChangeMethodModal");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} size="lg">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Change Payment Method
        </h2>
        <p className="text-gray-500 font-medium mb-8">
          Choose a different payment method to complete your order.
        </p>

        <PaymentMethodList
          selectedMethod={selectedMethod}
          onChange={(method) => setSelectedMethod(method)}
        />

        <div className="flex gap-4 mt-8">
          <button
            type="button"
            onClick={handleCloseModal}
            className="button-secondary w-full"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              OrdersService.updatePaymentMethod(selectedMethod);
            }}
            className="button-primary w-full"
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};
