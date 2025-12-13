import React from "react";

export const ShippingAddressForm = () => {
  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 mb-4 mt-8">
        Shipping Address
      </h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="address" className="label-form">
            Street Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="input-form"
          />
        </div>

        <div>
          <label htmlFor="apartment" className="label-form">
            Apartment, suite, etc.{" "}
            <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            name="apartment"
            id="apartment"
            className="input-form"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-1 sm:col-span-1">
            <label htmlFor="city" className="label-form">
              City
            </label>
            <input type="text" name="city" id="city" className="input-form" />
          </div>
          <div>
            <label htmlFor="state" className="label-form">
              State / Provincie
            </label>
            <input type="text" name="state" id="state" className="input-form" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="zip" className="label-form">
              Postal code
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              className="input-form"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
