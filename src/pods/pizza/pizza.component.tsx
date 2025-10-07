
import { Elements } from "@/layout/elements.layout";
import { Pizza } from "./pizza.vm";
import { ElementCard } from "@/core/components/card.component";

interface Props{
    pizzas: Pizza[]
}

export const PizzaComponent: React.FC<Props> = (props) => {
    const {pizzas} = props
  return (
    <Elements>
      {pizzas.map((pizza) => (
        <ElementCard element={pizza}/>
      ))}
    </Elements>
  );
};
