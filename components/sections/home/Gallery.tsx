import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { LyricsAnimated } from "@/components/animated/LyricsAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";

export const Gallery = () => {
  return (
    <section className="pt-20">
      <div className="min-h-screen relative">
        <div className="container">
          <div className="text-center">
            <div className="uppercase text-red-600 font-bold mb-4">
              <LyricsAnimated text="- Food love -" />
            </div>
            <TextBlockAnimated>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-mono text-gray-900 font-black mb-2">
                Photo Gallery
              </h2>
            </TextBlockAnimated>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-10">
            <ElementAnimated
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className="col-span-full lg:col-span-4 h-full"
            >
              <img
                src="/gallery/burger-1.jpg"
                alt=""
                className="w-full object-cover rounded-4xl hover:scale-105 transition-all duration-700 h-[500px]"
              />
            </ElementAnimated>
            <ElementAnimated
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className="col-span-full lg:col-span-4 h-full"
            >
              <img
                src="/gallery/hot_dog-1.jpg"
                alt=""
                className="w-full object-cover rounded-4xl hover:scale-105 transition-all duration-700 h-[500px]"
              />
            </ElementAnimated>
            <ElementAnimated
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className="col-span-full lg:col-span-4 h-full"
            >
              <img
                src="/gallery/pizza-8.jpg"
                alt=""
                className="w-full object-cover rounded-4xl hover:scale-105 transition-all duration-700 h-[500px]"
              />
            </ElementAnimated>
            <ElementAnimated
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className="col-span-full lg:col-span-6 h-full"
            >
              <img
                src="/gallery/pizza-2.jpg"
                alt=""
                className="w-full object-cover rounded-4xl hover:scale-105 transition-all duration-700 h-[500px]"
              />
            </ElementAnimated>
            <ElementAnimated
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2, once: true }}
              className="col-span-full lg:col-span-6 h-full"
            >
              <img
                src="/gallery/pizza-5.jpg"
                alt=""
                className="w-full object-cover rounded-4xl hover:scale-105 transition-all duration-700 h-[500px]"
              />
            </ElementAnimated>
          </div>
        </div>
      </div>
    </section>
  );
};
