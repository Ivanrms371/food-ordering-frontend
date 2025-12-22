import { CustomizationCategory } from "./customization.interface";
import { PopularDishResponse } from "./dish.interface";

export interface OrderItem {
  dishId: string;
  quantity: number;
  notes?: string;
  customizationOptions: string[];
}

export interface CartItem {
  cartItemId?: string; // to manage frontend
  dish: PopularDishResponse | null;
  quantity: number;
  priceUnit: number;
  discountApplied: number;
  notes?: string;
  discountCode?: string;
  customizationCategories: CustomizationCategory[];
}
