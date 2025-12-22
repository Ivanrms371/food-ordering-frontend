"use client";

import { toast } from "sonner";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { getUserLocation } from "@/utils/location";

export const PickupLocation = () => {
  const [distance, setDistance] = useState(-1);

  const handleClick = async () => {
    const { success, distance } = await getUserLocation();
    setDistance(distance);
    if (!success) {
      toast.error("An error has occurred trying to get your location");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-700 mb-4">
        Pickup Location
      </h2>

      <div className="p-4 radio-card-wrapper flex justify-between items-center gap-4 mb-4">
        <input
          type="radio"
          name="pickup-location"
          id="pickup-location"
          className="hidden"
          onChange={() => console.log("pickup location")}
          checked
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-gray-700 text-sm">
            El Fondito Gourmet{" "}
            {distance !== -1 && (
              <span className="text-gray-400 text-sm">
                ({distance.toFixed(1)} km)
              </span>
            )}
          </h3>
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="size-4 text-gray-500" />
            <p className="text-xs text-gray-500">
              Av. 18 de Julio 1456, Montevideo
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <div className="flex items-center gap-1 text-gray-700 rounded-full text-xs font-semibold">
            FREE
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <ClockIcon className="size-4" /> Ready in 30 minutes
          </div>
        </div>
      </div>

      <button onClick={handleClick} className="button-secondary mb-4 w-fit">
        Use my location
      </button>

      <p className="text-sm text-gray-500">
        Use your location to check how far you are from the pickup point.
      </p>
    </div>
  );
};
