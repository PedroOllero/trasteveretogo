import { FoodType } from "@/core/core.vm";
import { Pizza } from "./pizza.vm";

export const pizzas: Pizza[] = [
    {
      id: 1,
      name: "Margherita",
      ingredients: ["Tomato", "Mozzarella", "Basil"],
      calories: 850,
      price: 7.5,
      image: "/margherita.jpg",
      type: FoodType.Pizza,
    },
    {
      id: 2,
      name: "Pepperoni",
      ingredients: ["Tomato", "Mozzarella", "Pepperoni"],
      calories: 950,
      price: 9.0,
      image: "/pepperoni.jpg",
      type: FoodType.Pizza
    },
    {
      id: 3,
      name: "Four Cheeses",
      ingredients: ["Mozzarella", "Gorgonzola", "Parmesan", "Provolone"],
      calories: 1100,
      price: 10.5,
      image: "/fourCheese.jpg",
      type: FoodType.Pizza
    },
    {
      id: 4,
      name: "Hawaiian",
      ingredients: ["Tomato", "Mozzarella", "Ham", "Pineapple"],
      calories: 980,
      price: 9.5,
      image: "/hawaiana.jpg",
      type: FoodType.Pizza
    },
    {
      id: 5,
      name: "Vegetarian",
      ingredients: ["Tomato", "Mozzarella", "Peppers", "Onion", "Mushrooms", "Olives"],
      calories: 870,
      price: 8.5,
      image: "/vegetarian.jpg",
      type: FoodType.Pizza
    },
    {
      id: 6,
      name: "BBQ",
      ingredients: ["Barbecue sauce", "Mozzarella", "Chicken", "Bacon", "Onion"],
      calories: 1200,
      price: 11.0,
      image: "/barbacoa.jpg",
      type: FoodType.Pizza
    },
  ];