import { useEffect, useState } from "react";
import { useAuthStore } from "@store/auth.store";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { UserAddress } from "@interfaces/user.interface";
import {
  addNewAddress,
  deleteAddress,
  updateAddress,
} from "@services/userAddressService";
import AddressModal from "@components/modals/AddressModal";
import { useModalStore } from "@store/modal.store";

export const UserAddresses = () => {
  const { userAddresses, isLoadingAddresses, loadMyAddresses } = useAuthStore();
  const { openModal } = useModalStore();

  useEffect(() => {
    loadMyAddresses();
  }, []);

  const handleOpenModal = (address: UserAddress | null) => {
    openModal("AddressModal", {
      initialData: address,
    });
  };

  if (isLoadingAddresses) return <UserAddressesSkeleton />;

  return (
    <>
      <div className="space-y-3 mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center ">
          <h2 className="text-gray-700 text-xl font-mono">My Addresses</h2>
          <button
            type="button"
            onClick={() => handleOpenModal(null)}
            className="button-primary flex gap-1 items-center"
          >
            <PlusIcon className="size-4" />
            New Address
          </button>
        </div>

        {!userAddresses?.length ? (
          <div className="">
            <div className="flex gap-2 items-end mb-2">
              <p className="text-gray-500">
                No addresses found,{" "}
                <button
                  className="text-primary-500 cursor-pointer"
                  onClick={() => handleOpenModal(null)}
                  type="button"
                >
                  create one here
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userAddresses.map((address) => (
              <div key={address.id} className="bg-white shadow p-5 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-700 leading-4">
                    {address.label}
                  </h3>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(address)}
                      className="size-5"
                    >
                      <PencilSquareIcon className="size-5 text-gray-500 hover:text-primary-400 transition cursor-pointer" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteAddress(address.id)}
                      className="size-5"
                    >
                      <TrashIcon className=" text-gray-500 hover:text-red-600 transition cursor-pointer" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-800 text-sm mb-2">
                  {address.street}
                  {address.apartment ? `, Apt ${address.apartment}` : ""},{" "}
                  {address.city}
                </p>
                {address.instructions && (
                  <p className="text-gray-500 text-sm">
                    Notes: {address.instructions}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const UserAddressesSkeleton = () => {
  return (
    <div className="space-y-4 mt-6 pt-6 border-t border-gray-200">
      <div className="h-4 w-[180px] bg-gray-200 rounded-lg animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="h-20 bg-gray-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};
