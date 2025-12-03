import {
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@node_modules/@heroicons/react/24/outline";

export const AboutUs = () => {
  return (
    <section className="py-12 bg-neutral-900">
      <div className="h-screen relative">
        <div className="w-full py-10 flex justify-center gap-10 uppercase text-[192px] scale-y-150 font-mono text-neutral-300 font-light text-center absolute top-0 left-1/2 transform -translate-x-1/2">
          <span className="text-nowrap">experience</span>
        </div>
        <div className="absolute bottom-20 w-full">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-20">
              <img
                src="/images/hero-burger-bg-removed.png"
                className="drop-shadow-xl"
                alt=""
              />
              <div>
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <hr className="w-10 border-t-2" />
                  <p className="font-bold uppercase">Since 1995</p>
                </div>
                <h2 className="text-7xl font-mono text-neutral-500 font-bold ">
                  The Best Burger
                  <span className="text-neutral-100 block font-black">
                    in the Town
                  </span>
                </h2>
                <p className="text-xl text-neutral-300 mt-4">
                  Discover the flavor that sets us apart — crafted fresh,
                  grilled to perfection, and made to make you come back for
                  more.
                </p>
                <div className="flex gap-2 mt-8">
                  <a href="/about" className="button-secondary">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3  gap-10 mt-20">
              <div className="flex gap-4 items-center">
                <div className="size-20 p-7 bg-neutral-800 rounded-full">
                  <RocketLaunchIcon className="size-6 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono text-neutral-200">
                    Fast Delivery
                  </h3>
                  <p className="text-neutral-400">
                    Your order, hot & fresh in minutes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="size-20 p-7 bg-neutral-800 rounded-full">
                  <CursorArrowRaysIcon className="size-6 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono text-neutral-200">
                    Easy Ordering
                  </h3>
                  <p className="text-neutral-400">
                    Simple, fast and hassle-free checkout.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="size-20 p-7 bg-neutral-800 rounded-full">
                  <StarIcon className="size-6 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono text-neutral-200">
                    Premium Quality
                  </h3>
                  <p className="text-neutral-400">
                    Fresh ingredients, crafted with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
