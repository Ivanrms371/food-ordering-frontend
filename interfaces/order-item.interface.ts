import { CustomizationCategory } from "./customization.interface";
import { PopularDishResponse } from "./dish.interface";

export interface OrderItem {
  dishId: string; // go backend
  quantity: number; // go backend

  notes?: string; // go backend
  discountCode?: string; // go backend
  customizationOptions: string[]; // go backend
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
