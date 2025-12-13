import { LyricsAnimated } from "@components/animated/LyricsAnimated";
import { PopularCategories } from "./PopularCategories";
import { PopularDishes } from "./PopularDishes";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";

export const PopularMenu = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <div className="uppercase text-red-600 font-bold mb-4">
            <LyricsAnimated
              text="- Our Best Dishes -"
              letterVariants={{
                hidden: { opacity: 0, y: 5 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            />
          </div>
          <TextBlockAnimated>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-mono text-gray-900 font-black mb-2">
              Popular Menu
            </h2>
          </TextBlockAnimated>
          <TextBlockAnimated transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg md:text-xl text-gray-500">
              Every choice is a delight.
            </p>
          </TextBlockAnimated>

          {/* <PopularCategories /> */}
          <PopularDishes />
        </div>
      </div>
    </section>
  );
};
