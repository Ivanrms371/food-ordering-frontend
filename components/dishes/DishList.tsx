import { PopularDishResponse } from "@/interfaces/dish.interface";
import { DishCard } from "./DishCard";
import { DishCardSkeleton } from "./DishCardSkeleton";
import { useIsMobile } from "@/hooks/isMobile";

interface Props {
  dishes: PopularDishResponse[];
  isLoading: boolean;
}

export const DishList = ({ dishes, isLoading }: Props) => {
  const isMobile = useIsMobile();
  if (isLoading) return <DishListSkeleton />;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {dishes.map((dish, index) => (
        <DishCard key={dish.id} dish={dish} index={index} isMobile={isMobile} />
      ))}
    </div>
  );
};

export const DishListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <DishCardSkeleton key={index} />
      ))}
    </div>
  );
};
