/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const OpenCart: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 7fr 3fr;
        height: 70vh;
        padding: 30px;

        @media (max-width: 900px) {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 500px;
          gap: 20px;
        }
      `}
    >
      {children}
    </div>
  );
};
