import React from "react";
import { DynamicHeading } from "../ui/DynamicHeading";

interface Props {}
export const Promotions = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* <div className="text-center">
          <p className="uppercase text-primary-600 font-bold mb-4 text-lg">
            Best burgers
          </p>
          <DynamicHeading
            beforeText="Enjoy Our"
            highlightOne="Best"
            highlightTwo="Promotions"
          />
          <p className="text-xl text-gray-400 mt-4">
            Grab the best offers now.
          </p>
        </div>  */}

        <div className="mt-20 border border-gray-200 rounded-3xl">
          <div className="max-w-screen-2xl w-full p-10 lg:p-14 grid lg:grid-cols-2 gap-2 lg:gap-10">
            <div className="relative group min-h-96">
              <div className="top-24 absolute  -left-10 sm:left-8 md:left-26 lg:left-2 xl:left-10 w-52 sm:w-64 xl:w-76 z-10">
                <img
                  src="/images/promotion_1.png"
                  alt=""
                  className="absolute -top-1 blur-xs opacity-40"
                />
                <img
                  src="/images/promotion_1.png"
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="top-24 absolute  -right-10 sm:right-8 md:right-26 lg:right-2 xl:right-10 w-52 sm:w-64 xl:w-76 z-10">
                <img
                  src="/images/promotion_1.png"
                  alt=""
                  className="absolute -top-1 blur-xs opacity-40"
                />
                <img
                  src="/images/promotion_1.png"
                  alt=""
                  className="absolute"
                />
              </div>
              <div className="relative transition-all duration-700 cabinet-grotesk text-9xl xl:text-[10rem] mt-2 lg:mt-4 xl:-mt-4 font-black text-primary-400 text-center">
                2x1
              </div>
              <p className="text-lg text-nowrap text-gray-500 bottom-10 lg:bottom-0 absolute left-1/2 -translate-x-1/2 ">
                * Not include french fries or drinks
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-10 lg:mb-0">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold cabinet-grotesk text-gray-700">
                  Fried Onion 2.0 + Criolla 2.0
                </h3>
                <p className="text-primary-500 text-xl lg:text-2xl">
                  Just $ 610,00 URU
                </p>
                <p className="mt-4 lg:text-lg text-gray-500 max-w-md">
                  Get two delicious burgers for the price of one — only on promo
                  day!
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <button className="button-disabled">Try the promo day</button>
                <p className="text-gray-500 text-sm">Tuesday August 12th</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
