import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AppRoutes } from "./routes";
import { PastaScene, PizzaScene } from "@/scenes";
import { CartScene } from "@/scenes/cart";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path={AppRoutes.root} element={<PastaScene />} />
        <Route path={AppRoutes.pasta} element={<PastaScene />} />
        <Route path={AppRoutes.pizza} element={<PizzaScene />} />
        <Route path={AppRoutes.cart} element={<CartScene />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
