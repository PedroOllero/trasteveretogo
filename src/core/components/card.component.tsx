/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Pizza } from "@/pods/pizza/pizza.vm";
import CardContent from "@mui/material/CardContent";
import { useCartContext } from "../context/cart.context";
import { Pasta } from "@/pods/pasta/pasta.vm";

interface Props {
  element: Pizza | Pasta;
}

export const ElementCard: React.FC<Props> = (props) => {
  const { addCartContext } = useCartContext();

  const AddToCart = (cartElement: Pizza) => {
    addCartContext(cartElement);
  };
  const { element } = props;
  return (
    <Card
      key={element.id}
      elevation={3}
      sx={{
        height: "fit-content",
      }}
    >
      <CardMedia
        sx={{ height: 150 }}
        image={element.image}
        title={element.name}
      />
      <CardContent
        css={css`
          padding: 20px 20px;
        `}
      >
        <Typography gutterBottom variant="h5" component="div">
          {element.name}
        </Typography>
        <div
          css={css`
            min-height: 90px;
          `}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary" }}
            marginBottom={1}
          >
            {element.ingredients.length > 1
              ? element.ingredients.slice(0, -1).join(", ") +
                " and " +
                element.ingredients.slice(-1)
              : element.ingredients[0]}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          sx={{ color: "text.secondary" }}
          marginBottom={1}
        >
          Calories: {element.calories} kcal
        </Typography>
      </CardContent>
      <CardActions
        css={css`
          padding: 0 20px 20px 20px;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Button
          size="large"
          variant="contained"
          onClick={() => AddToCart(element)}
        >
          Add to cart
        </Button>
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          {element.price.toFixed(2)} €
        </Typography>
      </CardActions>
    </Card>
  );
};
