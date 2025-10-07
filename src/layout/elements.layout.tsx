/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

export const Elements = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        
        @media (max-width: 1400px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 900px) {
          grid-template-columns: repeat(1, 1fr);
        }
      `}
    >
      {children}
    </div>
  );
};
