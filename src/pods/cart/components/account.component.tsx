/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";

interface Props {
  totalAccount: number;
}

export const Account: React.FC<Props> = (props) => {
  const { totalAccount } = props;
  return (
    <div
      css={css`
        padding: 10px 10px 0 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        border-top: 1px solid black;
      `}
    >
      <Typography
        variant="h4"
        sx={{
          color: "text.secondary",
          fontSize: {
            xs: "1.5rem",
            sm: "1rem",
            md: "2rem",
          },
        }}
      >
        Total account:
      </Typography>
      <Typography variant="h3" sx={{ color: "text.secondary", fontSize: {
            xs: "1.5rem",
            sm: "1rem",
            md: "2rem",
          }, }}>
        {totalAccount.toFixed(2)} €
      </Typography>
    </div>
  );
};
