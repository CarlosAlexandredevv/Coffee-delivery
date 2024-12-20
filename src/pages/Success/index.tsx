import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Success() {
  const { addressData, paymentMethod } = useContext(CartContext);

  const paymentMethodFormatted = {
    "CARTÃO DE CRÉDITO": "Cartão de Crédito",
    "CARTÃO DE DÉBITO": "Cartão de Débito",
    DINHEIRO: "Dinheiro",
  }[paymentMethod];

  return (
    <div className="mx-auto mt-12 flex max-w-container flex-col justify-between px-3 lg:flex-row xl:px-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-center text-[32px] font-extrabold leading-line text-yellow-dark sm:self-center lg:self-start">
            Uhu! Pedido confirmado
          </h2>
          <span className="text-center text-[20px] leading-line text-base-subtitle dark:text-zinc-200 sm:self-center lg:self-start">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </div>
        <div className="max-w-[450px] self-center rounded-[6px_36px] border border-transparent bg-gradient-to-br from-yellow to-purple bg-origin-border sm:min-w-[450px]">
          <div className="flex flex-col gap-8 rounded-[6px_36px] bg-white p-10 dark:bg-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple p-2">
                <MapPin className="text-white" weight="fill" />
              </div>
              <div className="flex flex-col">
                <p className="max-w-96 font-roboto leading-line text-base-text dark:text-zinc-200">
                  Entrega em{" "}
                  <span className="font-bold leading-line dark:text-zinc-50">
                    Rua {addressData.logradouro}, {addressData.numero}
                  </span>{" "}
                  {addressData.bairro} - {addressData.localidade},{" "}
                  {addressData.uf}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center gap-1 rounded-full bg-yellow p-2">
                <Timer className="text-white" weight="fill" />
              </div>
              <div className="flex flex-col">
                <p className="font-roboto leading-line text-base-text dark:text-zinc-50">
                  Previsão de entrega{" "}
                </p>
                <span className="font-roboto font-bold leading-line dark:text-zinc-200">
                  20 min - 30 min
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center gap-1 rounded-full bg-yellow-dark p-2">
                <CurrencyDollar className="text-white" weight="fill" />
              </div>
              <div className="flex flex-col">
                <p className="font-roboto leading-line text-base-text dark:text-zinc-200">
                  Pagamento na entrega
                </p>
                <span className="font-roboto font-bold leading-line dark:text-zinc-50">
                  {paymentMethodFormatted}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ x: -100, opacity: 0 }}
        className="place-self-center lg:place-self-end"
        src="public/Illustration.svg"
        alt=""
      />
    </div>
  );
}
