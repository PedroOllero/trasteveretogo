import { FoodType } from "@/core/core.vm";
import { Pasta } from "./pasta.vm";

export const pastas: Pasta[] = [
  {
    id: 9,
    name: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Guanciale", "Egg", "Pecorino Romano", "Black pepper"],
    calories: 950,
    price: 10.0,
    image: "/spaghetti.jpg",
    type: FoodType.Pasta
  },
  {
    id: 10,
    name: "Penne all'Arrabbiata",
    ingredients: ["Penne", "Tomato", "Garlic", "Chili pepper", "Parsley"],
    calories: 780,
    price: 9.0,
    image: "/penne.jpg",
    type: FoodType.Pasta
  },
  {
    id: 11,
    name: "Tagliatelle al Ragu",
    ingredients: ["Tagliatelle", "Ground beef", "Tomato", "Carrot", "Celery", "Red wine"],
    calories: 1100,
    price: 11.5,
    image: "/tagliatelle.jpg",
    type: FoodType.Pasta
  },
  {
    id: 12,
    name: "Lasagna Bolognese",
    ingredients: ["Lasagna sheets", "Ground beef", "Bechamel", "Mozzarella", "Tomato"],
    calories: 1300,
    price: 12.0,
    image: "/lasagna.jpg",
    type: FoodType.Pasta
  },
  {
    id: 13,
    name: "Fettuccine Alfredo",
    ingredients: ["Fettuccine", "Butter", "Parmesan"],
    calories: 900,
    price: 10.0,
    image: "/fettuccini.jpeg",
    type: FoodType.Pasta
  },
  {
    id: 14,
    name: "Orecchiette with Broccoli Rabe",
    ingredients: ["Orecchiette", "Broccoli rabe", "Garlic", "Olive oil", "Chili pepper"],
    calories: 820,
    price: 9.5,
    image: "/orecchiette.jpg",
    type: FoodType.Pasta
  },
  {
    id: 15,
    name: "Ricotta Ravioli",
    ingredients: ["Ravioli", "Ricotta", "Spinach", "Butter", "Sage"],
    calories: 1050,
    price: 12.5,
    image: "/ravioli.webp",
    type: FoodType.Pasta
  },
  {
    id: 16,
    name: "Trofie al Pesto",
    ingredients: [
      "Trofie",
      "Pesto (Basil, Pine nuts, Parmesan, Olive oil)",
      "Potatoes",
      "Green beans"
    ],
    calories: 880,
    price: 10.5,
    image: "/trofie.webp",
    type: FoodType.Pasta
  },
];