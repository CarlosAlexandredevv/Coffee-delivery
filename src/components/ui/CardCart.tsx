import { Coffee } from "phosphor-react";
import { BinIcon } from "./BinIcon";
import { InputNumber } from "./InputNumber";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  tags: string[];
  quantity: number;
}

interface CardCartProps {
  cartItems: Coffee[];
  setCartItems: React.Dispatch<React.SetStateAction<Coffee[]>>;
}

export function CardCart({ cartItems, setCartItems }: CardCartProps) {
  function handleQuantityChange(id: number, value: number) {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: value } : item,
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  return (
    <>
      {cartItems.length === 0 && (
        <div className="my-6 flex flex-col items-center justify-center">
          <Coffee size={64} className="text-zinc-500" />
          <p className="font-roboto font-semibold text-zinc-500">
            Nenhum produto adicionado
          </p>
        </div>
      )}
      {cartItems.map((coffee) => (
        <div key={coffee.id}>
          <div className="flex gap-5 bg-base-card dark:bg-zinc-800">
            <img className="size-16" src={coffee.img} alt={coffee.name} />
            <div className="flex w-full flex-col">
              <div className="flex justify-between">
                <span className="font-roboto leading-line text-base-subtitle dark:text-zinc-100">
                  {coffee.name}
                </span>
                <span className="font-roboto font-bold leading-line text-base-text dark:text-zinc-300">
                  R$ {coffee.price.toFixed(2)}
                </span>
              </div>

              <div className="mt-2 flex gap-2">
                <InputNumber
                  onChange={(value) => handleQuantityChange(coffee.id, value)}
                  value={coffee.quantity}
                />
                <BinIcon />
              </div>
            </div>
          </div>
          <div className="my-6 h-px w-full bg-base-button dark:bg-zinc-700"></div>
        </div>
      ))}
    </>
  );
}
