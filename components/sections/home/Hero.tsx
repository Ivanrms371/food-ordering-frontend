import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Image */}
        <div className="order-1 lg:order-2 h-full flex justify-center">
          <img
            src="/images/hero-burger-vertical.jpg"
            className="w-full lg:h-[90%] object-center object-cover rounded-full shadow-md"
            alt="Delicious Burger"
          />
        </div>

        {/* Text */}
        <div className="order-2 lg:order-1 my-auto">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-mono text-neutral-400">
            Your Favorite{" "}
            <span className="font-black text-neutral-600 block ">
              Food Delivered{" "}
            </span>
              <span className="font-black text-neutral-900 italic">Hot & Delicious</span>

          </h1>
          <p className="text-lg text-gray-500 mb-10 font-sans font-medium">
            Enjoy your favorite food without get out from home. We deliver hot & delicious food to your door. Order now and feel the difference.
          </p>
          <div className="flex flex-wrap gap-2 ">
            <Link href={"/menu"} className="button-primary flex gap-1 items-center hover:gap-4 transition-all duration-300 ease-in-out">
              Order Now <ArrowLongRightIcon className="size-5" />
            </Link>
            <Link href={"/offers"} className="button-secondary flex gap-1 items-center hover:gap-4 transition-all duration-300 ease-in-out">
              View Offers <ArrowLongRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
