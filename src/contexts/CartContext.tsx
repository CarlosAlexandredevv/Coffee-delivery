import { createContext, useState } from "react";

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: number;
  setCart: (cart: number) => void;
  isFormValid: boolean;
  setIsFormValid: (isValid: boolean) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <CartContext.Provider
      value={{ cart, setCart, isFormValid, setIsFormValid }}
    >
      {children}
    </CartContext.Provider>
  );
}
