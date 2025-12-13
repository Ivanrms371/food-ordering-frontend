import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";
import { ElementAnimated } from "@components/animated/ElementAnimated";

export const Hero = () => {
  return (
    <section className="container pb-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
        {/* Image */}
        <ElementAnimated
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full order-1 md:order-2 flex justify-center"
        >
          <img
            src="/images/hero-burger-vertical.jpg"
            className="w-full h-100 lg:h-[90%] object-center object-cover rounded-3xl md:rounded-full shadow-md"
            alt="Delicious Burger"
          />
        </ElementAnimated>

        {/* Text */}
        <div className="my-auto md:order-1 order-2 z-10">
          <TextBlockAnimated className="mb-4">
            <h1 className="text-5xl md:text-5xl xl:text-7xl font-bold font-mono text-gray-400">
              Your Favorite{" "}
              <span className="font-black text-gray-600 block ">
                Food Delivered{" "}
              </span>
              <span className="font-black text-gray-900 italic">
                Hot & Delicious
              </span>
            </h1>
          </TextBlockAnimated>
          <TextBlockAnimated
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <p className="text-lg text-gray-500 mb-0 font-sans font-medium">
              Enjoy your favorite food without get out from home. We deliver hot
              & delicious food to your door. Order now and feel the difference.
            </p>
          </TextBlockAnimated>

          <div className="flex flex-wrap gap-2 ">
            <TextBlockAnimated
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex gap-2 mt-8"
            >
              <Link
                href="/menu"
                className="button-primary flex gap-2 items-center"
              >
                Order Now <ArrowLongRightIcon className="size-5" />
              </Link>
            </TextBlockAnimated>
            <TextBlockAnimated
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-2 mt-8"
            >
              <Link
                href="/offers"
                className="button-secondary flex gap-2 items-center"
              >
                View Offers <ArrowLongRightIcon className="size-5" />
              </Link>
            </TextBlockAnimated>
          </div>
        </div>
      </div>
    </section>
  );
};
