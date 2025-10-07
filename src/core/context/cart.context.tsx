import { Pizza } from "@/pods/pizza/pizza.vm";
import { createContext, useContext, useState, ReactNode } from "react";
import { CartElement } from "../core.vm";

type CartContextType = {
  cartContext: CartElement[];
  addCartContext: (cartElement: Pizza) => void;
  removeCartContext: (cartElement: Pizza) => void;
  emptyCartContext: () => void;
  totalAccount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartElements, setCartElements] = useState<CartElement[]>([]);

  const addCartContext = (cartElement: Pizza) => {
    setCartElements((prev) => {
      const existingIndex = prev.findIndex(item => item.element.id === cartElement.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { element: cartElement, quantity: 1 }];
      }
    });
  };

  const removeCartContext = (cartElement: Pizza) => {
    setCartElements((prev) => {
      const existingIndex = prev.findIndex(item => item.element.id === cartElement.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        if (updated[existingIndex].quantity > 1) {
          updated[existingIndex].quantity -= 1;
          return updated;
        } else {
          return updated.filter((_, index) => index !== existingIndex);
        }
      }
      return prev;
    });
  };

  const emptyCartContext = () => {
    setCartElements([]);
  };

  const totalAccount: number = cartElements.reduce(
    (acc, item) => acc + item.element.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartContext: cartElements,
        addCartContext: addCartContext,
        removeCartContext: removeCartContext,
        emptyCartContext: emptyCartContext,
        totalAccount: totalAccount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useVacancies must be used within VacanciesProvider");
  }
  return context;
};
