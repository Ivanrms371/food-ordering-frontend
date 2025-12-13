import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";
import { StarIcon } from "@heroicons/react/16/solid";

interface StarRatingProps {
  rating: number; // suma de ratings
  reviewsCount?: number; // cantidad de reviews
  size?: number; // tamaño opcional en px
  index?: number;
  isMobile?: boolean;
  delay?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviewsCount,
  size = 16,
  index = 0,
  isMobile = false,
  delay = 0,
}) => {
  return (
    <div className="flex flex-col sm:justify-start gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          if (i + 1 <= Math.floor(rating)) {
            return (
              <ElementAnimated
                key={i}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05 + (isMobile ? 0.1 : index * 0.1) + delay,
                }}
              >
                <StarIcon key={i} className={`text-red-500 size-4 xs:size-5`} />
              </ElementAnimated>
            );
          } else if (i < rating && rating < i + 1) {
            return (
              <ElementAnimated
                key={i}
                className="relative size-4 xs:size-5"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05 + (isMobile ? 0.1 : index * 0.1) + delay,
                }}
              >
                <StarIcon className="absolute text-gray-200 size-4 xs:size-5" />
                <StarIcon
                  className="absolute text-red-500 overflow-hidden size-4 xs:size-5"
                  style={{
                    clipPath: "inset(0 50% 0 0)",
                  }}
                />
              </ElementAnimated>
            );
          } else {
            return (
              <ElementAnimated
                key={i}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.05 + (isMobile ? 0.1 : index * 0.2) + delay,
                }}
              >
                <StarIcon key={i} className="text-gray-200 size-4 xs:size-5" />
              </ElementAnimated>
            );
          }
        })}
      </div>

      {reviewsCount !== undefined && (
        <TextBlockAnimated
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          transition={{
            duration: 0.3,
            delay: isMobile ? 0.1 : index * 0.2 + delay,
          }}
        >
          {reviewsCount === 0 ? (
            <span className="text-xs italic text-gray-500">No reviews</span>
          ) : (
            <span className="text-xs italic text-gray-500">
              {rating.toFixed(1)} (
              {reviewsCount + reviewsCount === 1 ? "review" : "reviews"})
            </span>
          )}
        </TextBlockAnimated>
      )}
    </div>
  );
};
