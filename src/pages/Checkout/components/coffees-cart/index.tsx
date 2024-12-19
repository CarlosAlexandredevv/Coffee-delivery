import { ButtonCart } from "@/components/ui/ButtonCart";
import { CardCart } from "@/components/ui/CardCart";
import { CartContext } from "@/contexts/CartContext";
import { useState, useEffect, useContext } from "react";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  tags: string[];
  quantity: number;
}
export function CoffeesCart() {
  const { cart } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items: Coffee[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]",
    );
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotal(totalPrice);
  }, []);

  const deliveryFee = 3.5;
  const totalWithDelivery = total + deliveryFee;

  return (
    <div>
      <CardCart />
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
        <ButtonCart disabled={!cart} />
      </div>
    </div>
  );
}
