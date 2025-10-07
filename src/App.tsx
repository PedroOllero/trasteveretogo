import React from "react";
import { AppRouter } from "./router/app.router";
import { CartProvider } from "./core/context/cart.context";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material/styles";

export const App: React.FC = () => {  const [toggleMode, setToggleMode] = React.useState<PaletteMode>("light");

  const changeMode = () =>
    toggleMode === "light" ? setToggleMode("dark") : setToggleMode("light");

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#6ece90" },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ThemeProvider>
  );
};
