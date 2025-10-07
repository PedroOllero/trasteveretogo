import React from "react";
import { pizzas } from "./pizza.example";
import { PizzaComponent } from "./pizza.component";

export const PizzaPod: React.FC = () => {

  return <PizzaComponent pizzas={pizzas}/>
};
