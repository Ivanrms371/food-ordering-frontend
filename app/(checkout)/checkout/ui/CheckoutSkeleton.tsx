export const CheckoutSkeleton = () => {
  return (
    <div className="container max-w-screen-xl min-h-screen py-10 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-8">
          <div className="mb-4 h-8 w-60 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-18 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-18 bg-gray-200 rounded-md animate-pulse"></div>
          </div>

          <div className="mb-4 h-8 w-60 bg-gray-200 rounded-md animate-pulse"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <div className="h-5 w-46 bg-gray-200 rounded-md animate-pulse mb-1.5"></div>
              <div className="h-9.5 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="md:col-span-2">
              <div className="h-5 w-46 bg-gray-200 rounded-md animate-pulse mb-1.5"></div>
              <div className="h-9.5 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            <div className="col-span-1">
              <div className="h-5 w-46 bg-gray-200 rounded-md animate-pulse mb-1.5"></div>
              <div className="h-9.5 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="col-span-1">
              <div className="h-5 w-46 bg-gray-200 rounded-md animate-pulse mb-1.5"></div>
              <div className="h-9.5 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="md:col-span-2">
              <div className="h-5 w-46 bg-gray-200 rounded-md animate-pulse mb-1.5"></div>
              <div className="h-24 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            <div className="flex gap-2">
              <div className="size-5 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
