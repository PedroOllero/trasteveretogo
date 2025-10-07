/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Pasta } from "@/pods/pasta/pasta.vm";
import { Pizza } from "@/pods/pizza/pizza.vm";
import { CartElement } from "@/core/core.vm";

interface Props {
  item: CartElement;
  removeCartContext: (item: Pizza | Pasta) => void;
  addCartContext: (item: Pizza | Pasta) => void;
}

export const FinalCardCart: React.FC<Props> = (props) => {
  const { item, removeCartContext, addCartContext } = props;

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 50% 35% 15%;
        align-items: center;
        padding: 10px 20px;
        background-image: linear-gradient(
            300deg,
            #6ece90 5%,
            rgba(0, 0, 0, 0.3) 40%
          ),
          url("${item.element.image}");
        background-size: cover; /* Ajusta la imagen para cubrir el contenedor */
        background-position: center;
      `}
    >
      <div>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "1px 1px 10px rgba(0,0,0,0.7)",
            width: 200,
          }}
        >
          {item.element.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", textShadow: "1px 1px 10px rgba(0,0,0,0.7)", width: 700 }}
          marginBottom={1}
        >
          {item.element.ingredients.length > 1
            ? item.element.ingredients.slice(0, -1).join(", ") +
              " and " +
              item.element.ingredients.slice(-1)
            : item.element.ingredients[0]}
        </Typography>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 250px;
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
          variant="h4"
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
        variant="h4"
        textAlign={"right"}
        sx={{
          color: "white",
          fontWeight: "bold",
        }}
      >
        {(item.element.price * item.quantity).toFixed(2)} €
      </Typography>
    </div>
  );
};
