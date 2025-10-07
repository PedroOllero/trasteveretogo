/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FinalCart: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        height: 70vh;
        padding: 40px 120px;

        @media (max-width: 900px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      {children}
    </div>
  );
};
