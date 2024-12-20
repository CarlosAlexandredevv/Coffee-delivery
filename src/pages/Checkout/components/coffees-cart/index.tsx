import { ButtonCart } from "@/components/ui/ButtonCart";
import { CardCart } from "@/components/ui/CardCart";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  tags: string[];
  quantity: number;
}

interface Purchase {
  items: Coffee[];
  address: AddressData;
  paymentMethod: string;
  date: string;
}

interface AddressData {
  logradouro: string;
  numero: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function CoffeesCart() {
  const navigate = useNavigate();
  const { isFormValid, paymentMethod, setCart, addressData } =
    useContext(CartContext);
  const [cartItems, setCartItems] = useState<Coffee[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items: Coffee[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]",
    );
    setCartItems(items);
  }, []);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotal(totalPrice);
  }, [cartItems]);

  const deliveryFee = 3.5;
  const totalWithDelivery = total + deliveryFee;

  function handleCheckout() {
    const purchaseHistory: Purchase[] = JSON.parse(
      localStorage.getItem("purchaseHistory") || "[]",
    );
    const newPurchase: Purchase = {
      items: cartItems,
      address: addressData,
      paymentMethod: paymentMethod,
      date: new Date().toISOString(),
    };
    localStorage.setItem(
      "purchaseHistory",
      JSON.stringify([...purchaseHistory, newPurchase]),
    );
    localStorage.removeItem("cartItems");
    setCartItems([]);
    navigate("/success");
    setCart(0);
  }

  return (
    <div>
      <CardCart cartItems={cartItems} setCartItems={setCartItems} />
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-roboto text-sm leading-line text-base-text dark:text-zinc-100">
            Total de itens
          </span>
          <span className="font-roboto leading-line text-base-text dark:text-zinc-100">
            R$ {total.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-roboto text-sm leading-line text-base-text dark:text-zinc-100">
            Entrega
          </span>
          <span className="font-roboto leading-line text-base-text dark:text-zinc-100">
            R$ {deliveryFee.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-roboto text-[20px] font-bold leading-line text-base-subtitle dark:text-zinc-300">
            Total
          </span>
          <span className="font-roboto text-[20px] font-bold leading-line text-base-subtitle dark:text-zinc-300">
            R$ {totalWithDelivery.toFixed(2)}
          </span>
        </div>
        <ButtonCart
          type="button"
          onClick={handleCheckout}
          disabled={cartItems.length === 0 || !isFormValid || !paymentMethod}
        />
      </div>
    </div>
  );
}
