"use client";

import Modal from "../ui/Modal";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserAddressFormData } from "@/interfaces/user.interface";
import { useModalStore } from "@/store/modal.store";
import { addNewAddress, updateAddress } from "@/services/userAddressService";

const addressInitialState: UserAddressFormData = {
  street: "",
  city: "",
  apartment: "",
  label: "",
};

export default function AddressModal() {
  const {
    modals: { AddressModal },
    closeModal,
  } = useModalStore();

  const isOpen = AddressModal?.isOpen ?? false;
  const initialData = AddressModal?.props?.initialData ?? null;

  useEffect(() => {
    reset(initialData || addressInitialState);
  }, [isOpen]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UserAddressFormData>({
    defaultValues: initialData || addressInitialState,
  });

  const onSave = async (addressData: UserAddressFormData) => {
    if (addressData?.id) {
      return await updateAddress(addressData.id, addressData);
    }
    return await addNewAddress(addressData);
  };

  const onSubmit = async (formData: UserAddressFormData) => {
    const res = await onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    closeModal("AddressModal");
    reset(addressInitialState);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <h2 className="text-2xl text-gray-800 mb-4">
        {initialData ? "Edit address" : "Add new address"}
      </h2>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="label" className="text-gray-700">
            Label
          </label>
          <input
            type="text"
            id="label"
            placeholder="Label"
            className="input-form"
            {...register("label", {
              required: "Label is required",
            })}
          />
          {errors.label && (
            <p className="text-red-600 text-sm">{errors.label.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="street" className="text-gray-700">
            Street
          </label>
          <input
            type="text"
            id="street"
            placeholder="Street"
            className="input-form"
            {...register("street", {
              required: "Street is required",
            })}
          />
          {errors.street && (
            <p className="text-red-600 text-sm">{errors.street.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            className="input-form"
            placeholder="City"
            {...register("city", {
              required: "City is required",
            })}
          />
          {errors.city && (
            <p className="text-red-600 text-sm">{errors.city.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="apartment" className="text-gray-700">
            Apartment (Optional)
          </label>
          <input
            type="text"
            id="apartment"
            className="input-form"
            placeholder="Apartment, suite, etc."
            {...register("apartment")}
          />
          {errors.apartment && (
            <p className="text-red-600 text-sm">{errors.apartment.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="instructions" className="text-gray-700">
            Instructions (Optional)
          </label>
          <textarea
            id="instructions"
            placeholder="Instructions"
            className="input-form"
            {...register("instructions")}
          />
          {errors.instructions && (
            <p className="text-red-600 text-sm">
              {errors.instructions.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="button-secondary"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button type="submit" className="button-primary">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
