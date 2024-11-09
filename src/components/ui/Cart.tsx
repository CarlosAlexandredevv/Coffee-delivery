import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Cart() {
  return (
    <Link
      to="/checkout"
      className="p-2 text-yellow-dark bg-yellow-light rounded-md cursor-pointer relative"
    >
      <ShoppingCart className="size-[20px]" weight="fill" />
      <span className="flex items-center justify-center absolute bg-yellow-dark size-[20px] rounded-full -top-2 -right-2 text-white text-xs font-roboto font-bold">
        3
      </span>
    </Link>
  );
}
