import React, { useEffect, useState } from "react";
import { useCheckoutStore } from "@/store/checkout.store";
import { useAuthStore } from "@/store/auth.store";
import { ShippingAddressForm } from "./ShippingAddressForm";
import { AddressList } from "./AddressList";

export const AddressSelector = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { loadMyAddresses, userAddresses } = useAuthStore();
  const { setSelectedAddressId } = useCheckoutStore();

  useEffect(() => {
    if (userAddresses.length === 0) {
      loadMyAddresses();
    }
  }, []);

  return (
    <div className="">
      {showAddressForm || userAddresses.length === 0 ? (
        <ShippingAddressForm onClick={() => setShowAddressForm(false)} />
      ) : (
        <AddressList
          onClick={() => {
            setSelectedAddressId(undefined);
            setShowAddressForm(true);
          }}
        />
      )}
    </div>
  );
};
