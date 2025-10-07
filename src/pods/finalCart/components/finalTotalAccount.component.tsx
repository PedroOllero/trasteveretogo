/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Props {
  totalAccount: number;
}
export const FinalTotalAccount: React.FC<Props> = (props) => {
  const { totalAccount } = props;
  const disccount = 5;
  return (
    <Card
      variant="outlined"
      css={css`
        padding: 10px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div>
        <Typography variant="h5" component="h2">
          Resumen
        </Typography>
        <div
          css={css`
            display: grid;
            grid-template-columns: 5fr 1fr;
          `}
        >
          <Typography variant="subtitle1" component="h2">
            Products subtotal:
          </Typography>
          <Typography variant="subtitle1" component="h2" textAlign={"right"}>
            {totalAccount.toFixed(2)}€
          </Typography>
          <Typography variant="subtitle1" component="h2">
            First time disccount:
          </Typography>
          <Typography variant="subtitle1" component="h2" textAlign={"right"}>
            - {disccount.toFixed(2)}€
          </Typography>
        </div>
      </div>
      <div
        css={css`
          display: grid;
          padding-top: 10px;
          border-top: 1px solid black;
          display: grid;
          grid-template-columns: 5fr 1fr;
        `}
      >
        <Typography variant="h6" component="h2">
          Total:
        </Typography>
        <Typography variant="h6" component="h2" textAlign={"right"}>
          {totalAccount > 5 ? (totalAccount - disccount).toFixed(2) : "00,00"}€
        </Typography>
      </div>
    </Card>
  );
};
