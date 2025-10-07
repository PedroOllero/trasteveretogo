import { FoodType } from "@/core/core.vm";

export interface Pizza {
  id: number;
  name: string;
  ingredients: string[];
  calories: number;
  price: number;
  image: string;
  type: FoodType;
}
