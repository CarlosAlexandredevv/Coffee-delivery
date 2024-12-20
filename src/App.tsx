import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";
import { Toaster } from "sonner";
export function App() {
  return (
    <CartContextProvider>
      <Toaster richColors />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartContextProvider>
  );
}
