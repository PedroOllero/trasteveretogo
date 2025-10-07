/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FinalCartComponents } from "./finalCart.component";

export const FinalCartPod: React.FC = () => {
  return (
    <div
      css={css`
        padding-left: 30px;
      `}
    >
      <FinalCartComponents />
    </div>
  );
};
