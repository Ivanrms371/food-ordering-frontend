import React, { useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useCheckoutStore } from "@/store/checkout.store";

interface Props {
  onClick: () => void;
}

export const AddressList = ({ onClick }: Props) => {
  const { userAddresses } = useAuthStore();
  const { setSelectedAddressId, selectedAddressId } = useCheckoutStore();

  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4">
        <h2 className="text-2xl text-gray-700 font-medium">Your addresses</h2>
        <button
          className="text-sm text-gray-700 font-medium py-2 px-4 cursor-pointer"
          onClick={onClick}
        >
          Add address
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-4">
        {userAddresses.map(
          ({
            id,
            label,
            street1,
            street2,
            apartment,
            deliveryInstructions,
          }) => (
            <li key={id} className="radio-card-wrapper">
              <label htmlFor={id}>
                <input
                  type="radio"
                  name="address"
                  id={id}
                  value={id}
                  className="radio-card-input"
                  checked={selectedAddressId === id}
                  onChange={() => setSelectedAddressId(id)}
                />

                <div className="grid grid-cols-6 gap-1">
                  <h3 className=" text-lg text-gray-800 my-auto col-span-1">
                    {label}
                  </h3>
                  <div className="col-span-5 border-l border-gray-200 pl-4 py-0.5">
                    <p className="text-gray-500 text-xs mb-1">
                      {street1}
                      {street2 && `, ${street2}`}
                      {apartment && `, ${apartment}`}
                    </p>
                    {deliveryInstructions && (
                      <p className="text-gray-500 text-xs">
                        Notes: {deliveryInstructions}
                      </p>
                    )}
                  </div>
                </div>
              </label>
            </li>
          )
        )}
      </ul>
    </>
  );
};
