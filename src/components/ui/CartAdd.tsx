import { ShoppingCart } from "phosphor-react";

export function CartAdd() {
  return (
    <ShoppingCart
      weight="fill"
      size={38}
      className="cursor-pointer rounded-md bg-purple-dark p-2 text-white duration-300 hover:bg-purple"
    />
  );
}
