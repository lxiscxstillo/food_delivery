export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  price: number;
  calories: number;
  diameterCm: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  distanceKm: number;
  deliveryMinutes: number;
}

export type FoodCategory =
  | "Biryani"
  | "Pizza"
  | "Burger"
  | "Sandwich"
  | "Momos"
  | "Spring Roll"
  | "French Frise"
  | "Salad";

export type SizeOption = "Small" | "Medium" | "Large";

export interface CartItem {
  food: FoodItem;
  quantity: number;
  size: SizeOption;
}

export interface CategoryTab {
  label: FoodCategory;
  image: string;
}
