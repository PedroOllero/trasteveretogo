/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartElement } from "../core.vm";
import { Pasta } from "@/pods/pasta/pasta.vm";
import { Pizza } from "@/pods/pizza/pizza.vm";

interface Props {
  item: CartElement;
  removeCartContext: (item: Pizza | Pasta) => void;
  addCartContext:(item: Pizza | Pasta) => void;
}

export const CardCart: React.FC<Props> = (props) => {
  const { item, removeCartContext, addCartContext } = props;

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 40% 45% 15%;
        align-items: center;
        padding: 10px 20px;
        background-image: linear-gradient(
            300deg,
            #6ece90 5%,
            rgba(0, 0, 0, 0.3) 90%
          ),
          url("${item.element.image}");
        background-size: cover; /* Ajusta la imagen para cubrir el contenedor */
        background-position: center;
      `}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "white",
          fontWeight: "bold",
          textShadow: "1px 1px 10px rgba(0,0,0,0.9)",
          width: 200,
        }}
      >
        {item.element.name}
      </Typography>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 180px;

          @media (max-width: 900px) {
          display: none;
        } 
        `}
      >
        <Button
          variant="outlined"
          onClick={() => removeCartContext(item.element)}
          sx={{
            color: "white",
            fontWeight: "bold",
            borderColor: "white",
            borderWidth: 4,
            boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "1px 1px 10px rgba(0,0,0,0.9)",
          }}
        >
          {item.quantity}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => addCartContext(item.element)}
          sx={{
            color: "white",
            borderColor: "white",
            borderWidth: 4,
            boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </div>
      <Typography
        variant="h6"
        textAlign={"right"}
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: {
            xs: "0.9rem",
            sm: "1rem", 
            md: "1.25rem"
          },
        }}
      >
        {(item.element.price * item.quantity).toFixed(2)} €
      </Typography>
    </div>
  );
};
