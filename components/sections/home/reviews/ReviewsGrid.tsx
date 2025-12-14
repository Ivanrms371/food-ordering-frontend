"use client";
import { REVIEWS } from "@/data/reviews";
import { useIsMobile } from "@/hooks/isMobile";
import { StarRating } from "@/components/ui/StarRaiting";
import { ElementAnimated } from "@/components/animated/ElementAnimated";
import { TextBlockAnimated } from "@/components/animated/TextBlockAnimated";

export const ReviewsGrid = () => {
  const isMobile = useIsMobile();
  return (
    <div className="container mx-auto mt-20">
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
        {REVIEWS.map((review, index) => (
          <div
            key={review.review}
            className="break-inside-avoid mb-6 bg-white shadow-md p-8 rounded-3xl"
          >
            <StarRating
              rating={review.qualification}
              index={index}
              isMobile={isMobile}
            />
            <TextBlockAnimated
              className="flex-1 mt-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: isMobile ? 0 : index * 0.1,
              }}
            >
              <p className="text-gray-700 text-2xl">"{review.review}"</p>
            </TextBlockAnimated>
            <div className="mt-10 flex flex-row items-center gap-2">
              <ElementAnimated
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: isMobile ? 0.1 : index * 0.1 + 0.1,
                }}
                viewport={{ amount: 0.2, once: true }}
              >
                <img
                  src={review.avatar}
                  alt=""
                  className="rounded-full min-w-12 size-12 lg:size-16 object-cover"
                />
              </ElementAnimated>
              <TextBlockAnimated
                initial={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.5,
                  delay: isMobile ? 0.15 : index * 0.1 + 0.15,
                }}
              >
                <div className="flex flex-col">
                  <p className="text-gray-700 text-xl font-medium">
                    {review.author}
                  </p>
                  <p className="text-gray-500 text-sm">{review.email}</p>
                </div>
              </TextBlockAnimated>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
