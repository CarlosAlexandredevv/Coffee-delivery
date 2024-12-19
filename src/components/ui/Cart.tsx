import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { CartContext } from "@/contexts/CartContext";

export function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [localCartCount, setLocalCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setLocalCartCount(cartItems.length);
    setCart(cartItems.length);
  }, [cart, setCart]);

  return (
    <Link
      to="/checkout"
      className="relative cursor-pointer rounded-md bg-yellow-light p-2 text-yellow-dark"
    >
      <ShoppingCart className="size-[20px]" weight="fill" />
      <span className="absolute -right-2 -top-2 flex size-[20px] items-center justify-center rounded-full bg-yellow-dark font-roboto text-xs font-bold text-white">
        {localCartCount}
      </span>
    </Link>
  );
}
