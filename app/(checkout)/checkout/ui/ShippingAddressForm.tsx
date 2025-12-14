import React from "react";
import { useCheckoutStore } from "@/store/checkout.store";
import { Checkbox } from "@/components/ui/Checkbox";

export const ShippingAddressForm = () => {
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
      <h3 className="text-2xl font-medium text-gray-700 mb-4">
        Shipping Address
      </h3>

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
        <div>
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

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="label-form">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            className="input-form"
            value={address.phoneNumber}
            onChange={handleChange}
            required
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

        <div className="md:col-span-2">
          <Checkbox
            onOptionChange={() =>
              setAddress({ ...address, saveAddress: !address.saveAddress })
            }
            option="saveAddress"
            category="checkout"
            checked={address.saveAddress}
          />
          <label htmlFor="saveAddress" className="label-form">
            Save address for future orders
          </label>
        </div>
      </form>
    </div>
  );
};
