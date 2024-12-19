import { CartAdd } from "./CartAdd";
import { InputNumber } from "./InputNumber";
import { coffeeData } from "../../pages/Home/components/coffee-list/utils/datacoffee";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  tags: string[];
  quantity?: number;
}

export function CardHome() {
  const { setCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  function handleAddToCart(coffee: Coffee) {
    const quantity = quantities[coffee.id] || 1;
    const cartItems: Coffee[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]",
    );

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === coffee.id,
    );
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity =
        (cartItems[existingItemIndex].quantity || 1) + quantity;
    } else {
      coffee.quantity = quantity;
      cartItems.push(coffee);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCart(cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0));
  }

  function handleQuantityChange(id: number, value: number) {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <>
      {coffeeData.map((coffee) => (
        <motion.div
          key={coffee.id}
          className="relative mb-11 flex h-[310px] max-w-[256px] flex-col items-center rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card px-4 dark:bg-zinc-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className="absolute -top-5 size-[120px] select-none"
            src={coffee.img}
            alt={coffee.name}
          />

          {coffee.tags.length > 1 ? (
            <div className="mb-4 mt-28 flex gap-2">
              {coffee.tags.map((tag) => (
                <span
                  key={`${coffee.id}-${tag}`}
                  className="select-none rounded-full bg-yellow-light px-2 py-1 font-roboto text-[0.625rem] font-bold uppercase leading-line text-yellow-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <span className="mb-4 mt-28 select-none rounded-full bg-yellow-light px-2 py-1 font-roboto text-[0.625rem] font-bold uppercase leading-line text-yellow-dark">
              {coffee.tags[0]}
            </span>
          )}

          <h3 className="font-baloo text-[1.25rem] font-bold leading-line text-base-subtitle dark:text-zinc-100">
            {coffee.name}
          </h3>
          <p className="mt-2 text-center font-roboto text-sm leading-line text-base-label dark:text-zinc-400">
            {coffee.description}
          </p>

          <div className="mx-auto mb-5 mt-auto flex gap-4">
            <div className="flex items-center gap-1">
              <span className="font-roboto leading-line text-base-text dark:text-zinc-400">
                R$
              </span>
              <span className="font-baloo text-2xl font-extrabold leading-line text-base-text dark:text-zinc-200">
                {coffee.price.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <InputNumber
                onChange={(value) => handleQuantityChange(coffee.id, value)}
              />
              <CartAdd onClick={() => handleAddToCart(coffee)} />
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
