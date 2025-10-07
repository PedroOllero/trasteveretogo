
import { Elements } from "@/layout/elements.layout";
import { ElementCard } from "@/core/components/card.component";
import { Pasta } from "./pasta.vm";

interface Props{
    pastas: Pasta[]
}

export const PastaComponent: React.FC<Props> = (props) => {
    const {pastas} = props
  return (
    <Elements>
      {pastas.map((pasta) => (
        <ElementCard element={pasta}/>
      ))}
    </Elements>
  );
};
