import { DynamicHeading } from "../ui/DynamicHeading";

export const HowItWorks = () => {
  return (
    <section className="py-32">
      <div className="container">
        <p className="uppercase text-primary-600 text-center font-bold mb-4 text-lg">
          Easy. Fast. Delicious.
        </p>
        <DynamicHeading
          beforeText="Three Steps"
          highlightOne="to Get"
          highlightTwo="Your Burger"
        />
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mt-32">
          <div className="relative">
            <div className="text-center">
              <span className=" text-5xl font-extrabold font-cabinet-grotesk text-primary-500 block mb-4">
                First
              </span>
              <h3 className="text-3xl font-bold text-gray-800">
                Choose Your Burger
              </h3>
              <p className="text-xl text-gray-500">
                Browse our menu and pick your favorite burger or combo.
              </p>
            </div>
            <img
              src="/images/arrow-curved.svg"
              alt="Arrow"
              className="absolute -top-14 -right-16 xl:-right-20 size-24 xl:size-32 hidden md:block rotate-[230deg]"
            />
          </div>
          <div className="relative">
            <div className="text-center">
              <span className=" text-5xl font-extrabold font-cabinet-grotesk text-primary-500 block mb-4">
                Second
              </span>
              <h3 className="text-3xl font-bold text-gray-800">
                Customize Your Order
              </h3>
              <p className="text-xl text-gray-500">
                Add your favorite extras and choose your preferred sides and
                drinks.
              </p>
            </div>
            <img
              src="/images/arrow-curved.svg"
              alt="Arrow"
              className="absolute -top-14 -right-16 xl:-right-20 size-24 xl:size-32 hidden md:block rotate-[230deg]"
            />
          </div>
          <div className="relative">
            <div className="text-center">
              <span className=" text-5xl font-extrabold font-cabinet-grotesk text-primary-500 block mb-4">
                Third
              </span>
              <h3 className="text-3xl font-bold text-gray-800">
                Enjoy Your Burger
              </h3>
              <p className="text-xl text-gray-500">
                We prepare your order quickly and deliver it fresh right to your
                door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
