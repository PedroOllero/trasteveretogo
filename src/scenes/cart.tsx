import { BasicTabs } from "@/core/components/nav.component";
import { Background } from "@/layout/background.layout";
import { FinalCart } from "@/layout/finalCart.layout";
import { FinalCartPod } from "@/pods/finalCart/finalCart.pod";

export const CartScene: React.FC = () => {
  return (
    <Background>
      <BasicTabs />
      <FinalCart>
        <FinalCartPod />
      </FinalCart>
    </Background>
  );
};
