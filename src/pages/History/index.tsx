import { Calendar, Coffee, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Coffee {
  id: number;
  img: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
  quantity: number;
}

interface AddressData {
  logradouro: string;
  numero: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface Purchase {
  items: Coffee[];
  address: AddressData;
  paymentMethod: string;
  date: string;
}

export function History() {
  const [purchaseHistory, setPurchaseHistory] = useState<Purchase[]>([]);

  useEffect(() => {
    const data: Purchase[] = JSON.parse(
      localStorage.getItem("purchaseHistory") || "[]",
    );
    setPurchaseHistory(data);
  }, []);

  const paymentMethodFormatted = (method: string) => {
    const methods: Record<string, string> = {
      "CARTÃO DE CRÉDITO": "Cartão de Crédito",
      "CARTÃO DE DÉBITO": "Cartão de Débito",
      DINHEIRO: "Dinheiro",
    };
    return methods[method] || method;
  };

  return (
    <main className="mx-auto max-w-container px-3 py-8">
      <div>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
          className="text-center text-[32px] font-extrabold leading-line text-yellow-dark sm:self-center lg:self-start"
        >
          Histórico de Pedidos
        </motion.h1>
        {purchaseHistory.length === 0 ? (
          <motion.div
            className="my-6 flex flex-col items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ x: -100, opacity: 0 }}
          >
            <Coffee size={64} className="text-zinc-500" />
            <p className="font-roboto font-semibold text-zinc-500">
              Nenhum pedido realizado
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ x: -100, opacity: 0 }}
            className="mt-6 grid grid-flow-row-dense auto-rows-min gap-6 self-center md:grid-cols-2"
          >
            {purchaseHistory.map((purchase, index) => (
              <div
                className="rounded-[6px_36px] border border-purple"
                key={index}
              >
                <div className="flex flex-col gap-y-5 rounded-[6px_36px] p-10 font-roboto">
                  {purchase.items.map((coffee, coffeeIndex) => (
                    <div key={coffeeIndex} className="flex items-center gap-2">
                      <img
                        src={coffee.img}
                        alt={coffee.name}
                        className="h-20 w-20 object-cover"
                      />
                      <div className="flex flex-col gap-2 leading-line">
                        <p className="font-roboto text-base leading-line text-base-subtitle dark:text-zinc-200">
                          {coffee.name}
                        </p>
                        <p className="font-roboto text-base leading-line text-base-subtitle dark:text-zinc-200">
                          Quantidade: {coffee.quantity}
                        </p>
                        <p className="font-roboto text-base leading-line text-base-subtitle dark:text-zinc-200">
                          Preço Total: R${" "}
                          {(coffee.price * coffee.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="my-6 h-px w-full bg-base-button dark:bg-zinc-700"></div>
                  <div className="ml-6 flex items-center gap-2 font-roboto text-base leading-line text-base-subtitle dark:text-zinc-200">
                    <Calendar className="text-yellow" size={32} />
                    <p>{new Date(purchase.date).toLocaleDateString("pt-BR")}</p>
                  </div>
                  <p className="ml-6 flex items-center gap-2 font-roboto text-base leading-line text-base-subtitle dark:text-zinc-200">
                    <MapPin className="text-purple" size={32} />
                    {purchase.address.logradouro}, {purchase.address.numero} -{" "}
                    {purchase.address.bairro}, {purchase.address.localidade} -{" "}
                    {purchase.address.uf}
                  </p>
                  <p className="ml-6 flex items-center gap-2 font-roboto text-base leading-line text-base-subtitle dark:text-zinc-200">
                    <CurrencyDollar className="text-green-400" size={32} />
                    {paymentMethodFormatted(purchase.paymentMethod)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
