import { useState } from "react";
import { PopularDishResponse } from "@interfaces/dish.interface";
import { formatCurrency } from "@utils/currency";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { StarRating } from "../ui/StarRaiting";
import favoritesService from "@services/favorites/favoritesService";
import { toast } from "sonner";
import { useModalStore } from "@store/modal.store";
import { useCartStore } from "@store/cart.store";
import { ElementAnimated } from "@components/animated/ElementAnimated";
import { TextBlockAnimated } from "@components/animated/TextBlockAnimated";

interface Props {
  dish: PopularDishResponse;
  index: number;
  isMobile: boolean;
}

export const DishCard = ({ dish, index, isMobile }: Props) => {
  const { openModal } = useModalStore();
  const { setCartItem } = useCartStore();
  const [isFavorite, setIsFavorite] = useState(dish.isFavorite);
  const { addFavorite, removeFavorite } = favoritesService;
  const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);

  const handleFavoriteEnter = () => setIsFavoriteHovered(true);
  const handleFavoriteLeave = () => setIsFavoriteHovered(false);

  const handleFavoriteClick = async () => {
    try {
      setIsFavorite((prev) => !prev);
      if (isFavorite) {
        const res = await removeFavorite(dish.id);
        toast.success("Dish removed from favorites");
      } else {
        const res = await addFavorite(dish.id);
        toast.success("Dish added to favorites");
      }
    } catch (error) {
      setIsFavorite((prev) => !prev);
      toast.error("Something went wrong");
    }
  };

  const showSolid = isFavorite || isFavoriteHovered;

  const handleAddToCartClick = async () => {
    setCartItem({
      dish,
      quantity: 1,
      priceUnit: dish.price,
      discountApplied: dish.discountApplied ?? 0,
      notes: "",
      customizationCategories: [],
    });
    openModal("OrderItemModal");
  };

  return (
    <div key={dish.id} className="flex flex-col sm:flex-row gap-6 group">
      <ElementAnimated
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.5, once: true }}
        transition={{ duration: 0.3, delay: isMobile ? 0.1 : index * 0.05 }}
        className="size-28 min-w-28 relative"
      >
        <img
          src={"/images/1.jpg"}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </ElementAnimated>
      <div className="flex flex-col gap-2 text-left w-full">
        <div className="flex items-center gap-2">
          <div className="flex flex-row items-center gap-2 flex-1">
            <ElementAnimated
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{
                duration: 0.3,
                delay: isMobile ? 0.1 : index * 0.1,
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 font-mono">
                {dish.name}
              </h3>
            </ElementAnimated>
            <ElementAnimated
              className="flex-1"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: true }}
              transition={{
                duration: 0.3,
                delay: isMobile ? 0.1 : index * 0.1 + 0.1,
              }}
            >
              <hr className="w-full border-t border-gray-400 border-dashed" />
            </ElementAnimated>
          </div>
          <TextBlockAnimated
            initial={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.3,
              delay: isMobile ? 0.1 : index * 0.1 + 0.15,
            }}
          >
            <p className="text-base xs:text-lg font-bold text-gray-800 font-mono flex flex-col sm:flex-row sm:gap-2 items-center">
              {dish.discountApplied > 0 ? (
                <>
                  <span className="line-through text-gray-500 text-sm">
                    {formatCurrency(dish.price)}
                  </span>
                  <span>{formatCurrency(dish.discountPrice ?? 0)}</span>
                </>
              ) : (
                formatCurrency(dish.price)
              )}
            </p>
          </TextBlockAnimated>
        </div>

        <TextBlockAnimated
          initial={{ opacity: 0, y: 10 }}
          transition={{
            duration: 0.3,
            delay: isMobile ? 0.1 : index * 0.1 + 0.2,
          }}
        >
          <p className="text-gray-600 text-sm">{dish.description}</p>
        </TextBlockAnimated>

        <div className="flex mt-4 justify-between sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <StarRating
                rating={dish.rating === 0 ? 1 : dish.rating}
                reviewsCount={dish.reviewsCount}
                index={index}
                isMobile={isMobile}
              />
            </div>
          </div>

          <div className="flex gap-2 items-center justify-end">
            <button
              type="button"
              className="transition-transform duration-200 hover:scale-110 active:scale-90"
              onMouseEnter={handleFavoriteEnter}
              onMouseLeave={handleFavoriteLeave}
              onClick={handleFavoriteClick}
            >
              {showSolid ? (
                <HeartIconSolid className="size-6 text-red-500" />
              ) : (
                <HeartIconOutline className="size-6 text-red-500" />
              )}
            </button>
            <button
              type="button"
              className="button-primary w-full xs:w-fit"
              onClick={handleAddToCartClick}
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
