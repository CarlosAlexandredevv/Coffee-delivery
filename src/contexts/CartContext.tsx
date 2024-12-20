import { createContext, useState } from "react";

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface AddressData {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface CartContextType {
  cart: number;
  setCart: (cart: number) => void;
  isFormValid: boolean;
  setIsFormValid: (isValid: boolean) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  addressData: AddressData;
  setAddressData: (data: AddressData) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [addressData, setAddressData] = useState<AddressData>({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isFormValid,
        setIsFormValid,
        paymentMethod,
        setPaymentMethod,
        addressData,
        setAddressData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
