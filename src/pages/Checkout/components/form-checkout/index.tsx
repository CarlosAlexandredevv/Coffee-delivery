import { InputForm } from "@/components/ui/InputForm";
import { MapPinLine } from "phosphor-react";
import { motion } from "framer-motion";
export function FormCheckout() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: -100, opacity: 0 }}
      className="mt-6 rounded-md bg-base-card p-10 dark:bg-zinc-800"
    >
      <div className="flex gap-2">
        <MapPinLine size={22} className="text-yellow-dark" />
        <div>
          <h2 className="font-roboto leading-line text-base-subtitle dark:text-zinc-100">
            Endereço de Entrega
          </h2>
          <h3 className="mt-0.5 font-roboto text-sm leading-line text-base-text dark:text-zinc-400">
            Informe o endereço onde deseja receber seu pedido
          </h3>
        </div>
      </div>

      <form className="mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4">
          <div className="md:col-span-2">
            <InputForm placeholder="CEP" />
          </div>
          <div className="md:col-span-6 md:row-start-2">
            <InputForm placeholder="Rua" />
          </div>
          <div className="md:col-span-2 md:row-start-3">
            <InputForm placeholder="Número" />
          </div>
          <div className="md:col-span-4 md:col-start-3 md:row-start-3">
            <InputForm placeholder="Complemento" opcional />
          </div>
          <div className="md:col-span-2 md:row-start-4">
            <InputForm placeholder="Bairro" />
          </div>
          <div className="md:col-span-3 md:col-start-3 md:row-start-4">
            <InputForm placeholder="Cidade" />
          </div>
          <div className="row-start-4 md:col-start-6">
            <InputForm placeholder="UF" />
          </div>
        </div>
      </form>
    </motion.div>
  );
}
