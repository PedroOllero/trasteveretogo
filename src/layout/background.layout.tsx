/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Background: React.FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        width: "100%";
        min-height: 100vh;
        background-image: linear-gradient(to top, #6ece90 10%, transparent 90%),
        url("/bg-pizza.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: grid;
        grid-template-rows: 5vh 95vh;
        background-color: #6ece90;

        @media (max-width: 900px) {
          display: grid;
        grid-template-rows: 10vh 1fr;
      `}
    >
      {children}
    </div>
  );
};
