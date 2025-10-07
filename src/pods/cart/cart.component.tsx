/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCartContext } from "@/core/context/cart.context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardCart } from "@/core/components/cartCard.component";
import { Account } from "./components/account.component";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/router";

export const CartComponents: React.FC = () => {
  const { cartContext, totalAccount, addCartContext, removeCartContext, emptyCartContext } =
    useCartContext();
  const navigate = useNavigate();

  const onClickCart = () => {
    navigate(AppRoutes.cart);
  };

  return (
    <Card sx={{ height: "90%", width: "100%" }} elevation={3}>
      <CardContent
        css={css`
          padding: 10px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div>
          {cartContext.map((item) => (
            <CardCart
              item={item}
              addCartContext={addCartContext}
              removeCartContext={removeCartContext}
            />
          ))}
        </div>
        <div>
          <Account totalAccount={totalAccount} />

          <div
            css={css`
              display: flex;
              flex-direction: row;
              gap: 20px;
            `}
          >
            <Button
              variant="outlined"
              sx={{
                marginTop: 3,
                padding: 2,
                fontSize: 16,
                width: "100%",
              }}
              onClick={onClickCart}
            >
              Hide Cart
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: 3,
                padding: 2,
                fontSize: 16,
                width: "100%",
              }}
              onClick={emptyCartContext}
            >
              Empty car
            </Button>
          </div>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              padding: 2,
              fontSize: 16,
              color: "white",
              width: "100%",
            }}
            onClick={onClickCart}
          >
            Proceed to Pay
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
