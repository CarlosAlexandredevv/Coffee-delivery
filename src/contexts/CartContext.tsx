import { createContext, useState } from "react";

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: number;
  setCart: (cart: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
