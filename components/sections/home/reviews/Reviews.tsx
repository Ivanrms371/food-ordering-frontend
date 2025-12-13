import { LyricsAnimated } from "@components/animated/LyricsAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";
import { ReviewsGrid } from "./ReviewsGrid";

export const Reviews = () => {
  return (
    <section className="py-16">
      <div className="min-h-screen relative">
        <div className="text-center">
          <div className="uppercase text-red-600 font-bold mb-4 ">
            <LyricsAnimated text="- Testimonials -" />
          </div>

          <TextBlockAnimated>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-mono text-gray-900 font-black mb-2">
              What say our clients?
            </h2>
          </TextBlockAnimated>
        </div>
        <ReviewsGrid />
      </div>
    </section>
  );
};
