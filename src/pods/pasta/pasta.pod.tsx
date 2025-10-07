import React from "react";
import { pastas } from "./pasta.example";
import { PastaComponent } from "./pasta.component";

export const PastaPod: React.FC = () => {

  return <PastaComponent pastas={pastas}/>
};
