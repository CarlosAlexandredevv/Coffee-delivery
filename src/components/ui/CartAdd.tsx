import { ShoppingCart } from 'phosphor-react';

export function CartAdd() {
  return (
    <ShoppingCart
      weight="fill"
      size={38}
      className="bg-purple-dark p-2 rounded-md text-white cursor-pointer hover:bg-purple duration-300"
    />
  );
}
