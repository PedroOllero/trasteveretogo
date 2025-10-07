import { Pasta } from "@/pods/pasta/pasta.vm";
import { Pizza } from "@/pods/pizza/pizza.vm";

export enum FoodType{
    Pizza,
    Pasta
}

export interface CartElement {
    element: Pizza | Pasta;
    quantity: number;
}