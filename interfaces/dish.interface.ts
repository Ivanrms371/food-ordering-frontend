export interface DishSummary {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;

  // indicates whether the user marked this dish as a favorite
  isFavorite: boolean;

  // List of active offers applied to this dish
  offers: OfferSummary[];

  // average rating
  rating: number;
  reviewsCount: number;

  // Category (only the necessary information to display)
  category: {
    id: string;
    name: string;
    slug: string;
  };
}

export interface OfferSummary {
  id: string;
  title: string;
  discountPercentage?: number;
  discountPrice?: number;
  expiresAt?: string | null;
}
