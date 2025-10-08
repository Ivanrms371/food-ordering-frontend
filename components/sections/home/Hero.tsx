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
            className="w-full lg:h-[90%] object-center object-cover rounded-3xl"
            alt="Delicious Burger"
          />
        </div>

        {/* Text */}
        <div className="order-2 lg:order-1 my-auto">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold cabinet-grotesk text-gray-700">
            Your Favorite{" "}
            <span className="font-black text-gray-900 block ">
              Food Delivered{" "}
              <span className="text-primary-500">Hot & Delicious</span>
            </span>
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            Disfrutá tus platos favoritos sin salir de casa. Entregamos comida
            caliente, rápida y con el sabor que te encanta. Pedí hoy y sentí la
            diferencia.
          </p>
          <div className="flex flex-wrap gap-2 ">
            <Link href={"/menu"} className="button-primary-with-icon">
              Order Now <ArrowLongRightIcon className="size-5" />
            </Link>
            <Link href={"/offers"} className="button-secondary-with-icon">
              View Offers <ArrowLongRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
