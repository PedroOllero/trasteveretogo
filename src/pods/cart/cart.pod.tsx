/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CartComponents } from "./cart.component";

export const CartPod: React.FC = () => {
  return (
    <div
      css={css`
        padding-left: 30px;
      `}
    >
      <CartComponents />
    </div>
  );
};
