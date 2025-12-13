import Link from "next/link";
import { LyricsAnimated } from "@components/animated/LyricsAnimated";
import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";
import { features } from "@constants/feature";
import { FeatureCard } from "./FeatureCard";

export const AboutUs = () => {
  return (
    <section className="py-0 bg-gray-900">
      <div className="min-h-screen relative">
        <div className="w-full py-18 flex justify-center gap-10 uppercase text-6xl xs:text-7xl md:text-9xl lg:text-[184px] scale-y-150 font-mono text-gray-300 font-light text-center absolute top-0 left-1/2 transform -translate-x-1/2">
          <LyricsAnimated text={"experience"} />
        </div>
        <div className="pt-40 lg:pt-52">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-20">
              <ElementAnimated
                initial={{ opacity: 0.5, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/images/hero-burger-bg-removed.png"
                  className="drop-shadow-xl"
                  alt="Burger Image"
                />
              </ElementAnimated>
              <div>
                <div className="flex items-center gap-2 text-red-600 mb-2">
                  <ElementAnimated
                    initial={{ width: 0 }}
                    whileInView={{ width: "2.5rem" }}
                    viewport={{ amount: 0.5, once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <hr className="w-full border-t-2" />
                  </ElementAnimated>
                  <ElementAnimated
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.5, once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-bold uppercase">Since 2005</p>
                  </ElementAnimated>
                </div>
                <TextBlockAnimated>
                  <h2 className="text-6xl md:text-7xl font-mono text-gray-500 font-bold ">
                    The Best Burger
                    <span className="text-gray-100 block font-black">
                      in the Town
                    </span>
                  </h2>
                </TextBlockAnimated>

                <TextBlockAnimated
                  transition={{
                    delay: 0.1,
                    duration: 0.5,
                  }}
                >
                  <p className="text-xl text-gray-300 mt-4">
                    Discover the flavor that sets us apart — crafted fresh,
                    grilled to perfection, and made to make you come back for
                    more.
                  </p>
                </TextBlockAnimated>
                <TextBlockAnimated className="flex gap-2 mt-8">
                  <Link href="/about" className="button-secondary">
                    Read more
                  </Link>
                </TextBlockAnimated>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 mt-20">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
