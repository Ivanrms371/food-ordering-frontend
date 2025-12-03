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
import { useModal } from "@hooks/useModal";

export const UserAddresses = () => {
  const { userAddresses, isLoadingAddresses, loadMyAddresses } = useAuthStore();

  const [addressEdit, setAddressEdit] = useState<UserAddress | null>(null);
  const { close, isOpen, open } = useModal("address-modal");

  useEffect(() => {
    loadMyAddresses();
  }, []);

  if (isLoadingAddresses) return <UserAddressesSkeleton />;

  return (
    <>
      <div className="space-y-3 mt-6 pt-6 border-t border-neutral-200">
        <div className="flex justify-between items-center ">
          <h2 className="text-neutral-700 text-xl font-mono">My Addresses</h2>
          <button
            type="button"
            onClick={() => {
              setAddressEdit(null);
              open();
            }}
            className="button-primary flex gap-1 items-center"
          >
            <PlusIcon className="size-4" />
             New Address
          </button>
        </div>

        {!userAddresses?.length ? (
          <div className="">
            <div className="flex gap-2 items-end mb-2">
              <p className="text-neutral-500">
                No addresses found,{" "}
                <button
                  className="text-primary-500 cursor-pointer"
                  onClick={() => {
                    setAddressEdit(null);
                    open();
                  }}
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
                  <h3 className="text-lg font-semibold text-neutral-700 leading-4">
                    {address.label}
                  </h3>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setAddressEdit(address);
                        open();
                      }}
                      className="size-5"
                    >
                      <PencilSquareIcon className="size-5 text-neutral-500 hover:text-primary-400 transition cursor-pointer" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteAddress(address.id)}
                      className="size-5"
                    >
                      <TrashIcon className=" text-neutral-500 hover:text-red-600 transition cursor-pointer" />
                    </button>
                  </div>
                </div>

                <p className="text-neutral-800 text-sm mb-2">
                  {address.street}
                  {address.apartment ? `, Apt ${address.apartment}` : ""},{" "}
                  {address.city}
                </p>
                {address.instructions && (
                  <p className="text-neutral-500 text-sm">
                    Notes: {address.instructions}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <AddressModal
        isOpen={isOpen}
        onClose={close}
        onSave={async (addressData) => {
          if (addressEdit?.id) {
            return await updateAddress(addressEdit.id, addressData);
          }
          return await addNewAddress(addressData);
        }}
        initialData={addressEdit}
      />
    </>
  );
};

const UserAddressesSkeleton = () => {
  return (
    <div className="space-y-4 mt-6 pt-6 border-t border-neutral-200">
      <div className="h-4 w-[180px] bg-neutral-200 rounded-lg animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="h-20 bg-neutral-200 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};
