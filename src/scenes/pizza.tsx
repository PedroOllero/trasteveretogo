import { PizzaPod } from "@/pods/pizza/pizza.pod";
import { Background } from "@/layout/background.layout";
import { OpenCart } from "@/layout/openCart.layout";
import { BasicTabs } from "@/core/components/nav.component";
import { CartPod } from "@/pods/cart/cart.pod";

export const PizzaScene: React.FC = () => {
  return (
    <Background>
      <BasicTabs />
      <OpenCart>
        <PizzaPod />
        <CartPod />
      </OpenCart>
    </Background>
  );
};
