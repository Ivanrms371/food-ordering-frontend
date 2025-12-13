export interface PopularDishResponse {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;

  price: number; // precio original
  discountApplied: number; // descuento aplicado
  discountPrice?: number; // precio final con descuento (opcional)

  rating: number; // promedio
  reviewsCount: number; // cantidad de reseñas
  isFavorite: boolean; // si el usuario lo marcó como favorito

  offers: OfferSummary[]; // info resumida de ofertas activas
  category: {
    id: string;
    name: string;
  };
}

export interface OfferSummary {
  id: string;
  title: string;
  discountPrice?: number;
  discountPercentage?: number;
  expiresAt?: string | null;
}
