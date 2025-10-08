import Image from "next/image";
import { DynamicHeading } from "../ui/DynamicHeading";
import { REVIEWS } from "@data/reviews";
import { twMerge } from "tailwind-merge";
import { StarIcon } from "@node_modules/@heroicons/react/16/solid";

export const Testimonials = () => {
  return (
    <section className="py-32">
      <div className="container">
        <DynamicHeading
          beforeText="What "
          highlightOne="people say"
          highlightTwo="about us"
          afterText="?"
        />

        <div
          className={twMerge(
            "columns-1 sm:columns-2 lg:columns-3 gap-2 mt-20",
            REVIEWS.length < 5 && "lg:columns-2"
          )}
        >
          {REVIEWS.map((review) => (
            <figure
              className="break-inside-avoid inline-block mb-2 p-6 bg-gray-100 rounded-3xl"
              key={review.review}
            >
              <blockquote className="text-xl text-gray-900 font-semibold">
                <p className="">"{review.review}"</p>
              </blockquote>
              <div className="flex justify-between items-end mt-6">
                <div className="flex items-center gap-2">
                  <Image
                    src={review.avatar}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                    alt=""
                    quality={100}
                  />
                  <div>
                    <p className="text-lg text-gray-700">{review.author}</p>
                    <p className="text-gray-600 text-xs">{review.email}</p>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
