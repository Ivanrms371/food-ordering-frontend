import React from "react";
import { useAuthStore } from "@/store/auth.store";
import { useCheckoutStore } from "@/store/checkout.store";
import { Checkbox } from "@/components/ui/Checkbox";

interface Props {
  onClick: () => void;
}

export const ShippingAddressForm = ({ onClick }: Props) => {
  const { userAddresses } = useAuthStore();
  const { address, setAddress } = useCheckoutStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddress({
      ...address,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-2 mb-4">
        <h3 className="text-2xl font-medium text-gray-700">Shipping Address</h3>
        {userAddresses.length > 0 && (
          <button
            className="text-sm text-gray-700 font-medium py-2 px-4 cursor-pointer"
            onClick={onClick}
          >
            Cancel
          </button>
        )}
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Street address */}
        <div className="md:col-span-2">
          <label htmlFor="street1" className="label-form">
            Street address
          </label>
          <input
            type="text"
            id="street1"
            name="street1"
            className="input-form"
            value={address.street1}
            onChange={handleChange}
            required
          />
        </div>

        {/* Street address line 2 */}
        <div className="md:col-span-2">
          <label htmlFor="street2" className="label-form">
            Street address line 2{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="street2"
            name="street2"
            className="input-form"
            value={address.street2}
            onChange={handleChange}
          />
        </div>

        {/* Apartment */}
        <div className="md:col-span-2">
          <label htmlFor="apartment" className="label-form">
            Apartment / Suite / Unit{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            className="input-form"
            value={address.apartment}
            onChange={handleChange}
          />
        </div>

        {/* Instructions */}
        <div className="md:col-span-2">
          <label htmlFor="instructions" className="label-form">
            Delivery instructions{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="instructions"
            name="instructions"
            className="textarea-form"
            value={address.instructions}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2 flex items-center gap-2">
          <Checkbox
            onChange={() =>
              setAddress({ ...address, saveAddress: !address.saveAddress })
            }
            id="saveAddress"
            checked={address.saveAddress}
          />
          <label htmlFor="saveAddress" className="text-gray-700 text-sm">
            Save address for future orders
          </label>
        </div>
        {address.saveAddress && (
          <div className="md:col-span-2">
            <label htmlFor="label" className="label-form">
              Save address as
            </label>
            <input
              type="text"
              id="label"
              name="label"
              placeholder="Home, Work, etc."
              className="input-form"
              value={address.label}
              onChange={handleChange}
              required
            />
          </div>
        )}
      </form>
    </div>
  );
};
