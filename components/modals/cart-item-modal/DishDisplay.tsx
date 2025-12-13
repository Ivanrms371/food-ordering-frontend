import { StarRating } from "@components/ui/StarRaiting";
import { formatCurrency } from "@utils/currency";
import { PopularDishResponse } from "@interfaces/dish.interface";
import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";

interface Props {
  dish: PopularDishResponse | null;
  isMobile: boolean;
}

export const DishDisplay = ({ dish, isMobile }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-8 gap-2 py-2">
      <ElementAnimated
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <img
          src="/images/1.jpg"
          alt={dish?.name ?? ""}
          className="size-40 rounded-full object-cover"
        />
      </ElementAnimated>
      <div className="flex-1 flex-col py-8">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <TextBlockAnimated
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-mono">
                {dish?.name}
              </h2>
            </TextBlockAnimated>
            <TextBlockAnimated
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <p className="text-lg sm:text-xl font-bold text-gray-600 font-mono flex justify-start flex-row gap-2 items-center">
                {(dish?.discountApplied ?? 0) > 0 ? (
                  <>
                    <span className="line-through text-gray-500 text-base">
                      {formatCurrency(dish?.price ?? 0)}
                    </span>
                    <span>{formatCurrency(dish?.discountPrice ?? 0)}</span>
                  </>
                ) : (
                  formatCurrency(dish?.price ?? 0)
                )}
              </p>
            </TextBlockAnimated>
          </div>
          <TextBlockAnimated
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <p className="sm:text-lg text-gray-600 mb-2">{dish?.description}</p>
          </TextBlockAnimated>
        </div>

        <div className="flex flex-row justify-between sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <StarRating
                rating={dish?.rating ? dish.rating : 1}
                reviewsCount={dish?.reviewsCount ?? 0}
                delay={0.15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
