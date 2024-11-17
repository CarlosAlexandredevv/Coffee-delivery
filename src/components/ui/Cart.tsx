import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Cart() {
  return (
    <Link
      to="/checkout"
      className="relative cursor-pointer rounded-md bg-yellow-light p-2 text-yellow-dark"
    >
      <ShoppingCart className="size-[20px]" weight="fill" />
      <span className="absolute -right-2 -top-2 flex size-[20px] items-center justify-center rounded-full bg-yellow-dark font-roboto text-xs font-bold text-white">
        3
      </span>
    </Link>
  );
}
