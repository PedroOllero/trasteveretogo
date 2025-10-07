/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCartContext } from "@/core/context/cart.context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FinalCardCart } from "./components/finalCartCard.component";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { FinalTotalAccount } from "./components/finalTotalAccount.component";

export const FinalCartComponents: React.FC = () => {
  const { cartContext, totalAccount, addCartContext, removeCartContext } =
    useCartContext();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | null>(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ height: "90%", padding: 3 }} elevation={3}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          padding: 5,
        }}
      >
        My Cart List
      </Typography>
      <CardContent
        css={css`
          padding: 10px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: 8fr 2fr;
            gap: 20px;
          `}
        >
          <div>
            {cartContext.map((item) => (
              <FinalCardCart
                item={item}
                addCartContext={addCartContext}
                removeCartContext={removeCartContext}
              />
            ))}
          </div>
          <FinalTotalAccount totalAccount={totalAccount} />
        </div>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              paddingTop: 5 ,
              paddingBottom: 3
            }}
          >
            Shipping Address
          </Typography>
        <form
          action=""
          css={css`
            width: "100%";
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          `}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </form>
        <Button
          variant="contained"
          sx={{ marginTop: 3, padding: 3, fontSize: 24, color: "white" }}
          onClick={handleOpen}
        >
          Proceed to Pay
        </Button>
      </CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Thanks {name} for buying in Trastevere!
          </Typography>
          <Typography sx={{ mt: 2, mb: 2 }}>
            We are sending your order to {address}. Rate how was your
            experience:
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </Modal>
    </Card>
  );
};
