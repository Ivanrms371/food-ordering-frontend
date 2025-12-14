import { useCheckoutStore } from "@/store/checkout.store";
import { BuildingStorefrontIcon, TruckIcon } from "@heroicons/react/24/outline";
import { DeliveryMethod } from "@/interfaces/checkout.interface";

export const DeliverySection = () => {
  const { deliveryMethod, setDeliveryMethod } = useCheckoutStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod(e.target.value as DeliveryMethod);
  };

  return (
    <div>
      <h3 className="text-2xl font-medium text-gray-700 mb-4">
        Delivery Methods
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="radio-card-wrapper flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              id="delivery-ship"
              className="radio-card-input"
              value={"delivery"}
              checked={deliveryMethod === "delivery"}
              onChange={handleChange}
            />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 text-sm">
                Delivery
              </span>
              <span className="text-xs text-gray-500">
                Unlocks in 30-45 min
              </span>
            </div>
          </div>
          <TruckIcon className="size-6 text-gray-700" />
        </label>
        <label className="radio-card-wrapper flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="delivery"
              id="delivery-pickup"
              className="radio-card-input"
              value={"pickup"}
              checked={deliveryMethod === "pickup"}
              onChange={handleChange}
            />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 text-sm ">
                Pick up
              </span>
              <span className="text-xs text-gray-500">Pick up in 15 min</span>
            </div>
          </div>
          <BuildingStorefrontIcon className="size-6 text-gray-700 " />
        </label>
      </div>
    </div>
  );
};
