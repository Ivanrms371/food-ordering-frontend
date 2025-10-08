import { FEATURED_MENU } from "@data/featured-menu";
import { calculateDiscount, formatCurrency } from "@utils/currency";
import { twMerge } from "tailwind-merge";
import { DynamicHeading } from "../ui/DynamicHeading";

export const FeaturedMenu = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <p className="uppercase text-primary-600 font-bold mb-4 text-lg">
            Best burgers
          </p>
          <DynamicHeading
            beforeText="Our"
            highlightOne="Featured"
            highlightTwo="Menu"
          />
          <p className="text-xl text-gray-500">Every choice is a delight.</p>
        </div>

        <ul className="grid md:grid-cols-2 gap-2 mt-20 max-w-3xl mx-auto">
          {FEATURED_MENU.map((burger, index) => {
            const realIndex = index + 1;
            return (
              <li
                key={burger.name}
                className={twMerge(
                  "rounded-3xl pt-2 px-2 pb-4 border border-gray-200 shadow flex flex-col justify-between",
                  realIndex % 2 === 0 && "md:top-20",
                  "relative"
                )}
              >
                <img
                  src={burger.image}
                  alt=""
                  className="rounded-2xl w-full aspect-square mb-4 object-cover object-center"
                />
                <div className="px-4">
                  <p className="text-2xl mb-2 text-gray-700 font-bold">
                    {burger.name}
                  </p>
                  <p className=" text-gray-500 mb-3">{burger.description}</p>
                </div>
                <div className="px-4">
                  {burger.discount && burger.discount > 0 ? (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <p className="text-gray-500 line-through cabinet-grotesk ">
                          {formatCurrency(burger.price)}
                        </p>
                        <div className="text-xs p-1 font-semibold rounded-md text-primary-600 bg-primary-100 ">
                          - {burger.discount}%
                        </div>
                      </div>
                      <p className="text-primary-500 text-2xl cabinet-grotesk">
                        {formatCurrency(
                          calculateDiscount(burger.price, burger.discount)
                        )}
                      </p>
                    </div>
                  ) : (
                    <p className="text-primary-500 text-2xl cabinet-grotesk ">
                      {formatCurrency(burger.price)}
                    </p>
                  )}
                  <div className="flex gap-4 mt-3">
                    <button className="button-primary">Add to my order</button>
                    <button className="button-secondary">Preview</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
