import { BasicTabs } from "@/core/components/nav.component";
import { Background } from "@/layout/background.layout";
import { OpenCart } from "@/layout/openCart.layout";
import { CartPod } from "@/pods/cart/cart.pod";
import { PastaPod } from "@/pods/pasta/pasta.pod";

export const PastaScene: React.FC = () => {
  return (
    <Background>
      <BasicTabs />
      <OpenCart>
        <PastaPod />
        <CartPod />
      </OpenCart>
    </Background>
  );
};
