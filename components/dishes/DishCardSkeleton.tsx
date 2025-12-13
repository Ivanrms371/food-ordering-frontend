import { PhotoIcon } from "@heroicons/react/24/outline";

export const DishCardSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4">
      <div className="size-32 sm:size-24 min-w-24 relative bg-gray-200 rounded-full animate-pulse flex justify-center items-center">
        <PhotoIcon className="size-8 text-gray-200" />
      </div>
      <div className="flex flex-col gap-2 text-left w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex flex-row items-center gap-2 flex-1">
            <div className="w-40 h-8 bg-gray-200 rounded-md animate-pulse"></div>
            {/* <hr className="flex-1 border-t border-gray-400 border-dashed" /> */}
          </div>
          <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        <div className="w-80 h-6 bg-gray-200 rounded-md animate-pulse"></div>

        <div className="flex flex-col gap-5 sm:flex-row justify-between sm:items-center">
          <div className="flex items-center gap-2">
            <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse"></div>
          </div>

          <div className="flex gap-2 items-center justify-end">
            <div className="w-32 h-11 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
