import { InputForm } from "@/components/ui/InputForm";
import { MapPinLine } from "phosphor-react";

export function FormCheckout() {
  return (
    <div className="mt-6 rounded-md bg-base-card p-10">
      <div className="flex gap-2">
        <MapPinLine size={22} className="text-yellow-dark" />
        <div>
          <h2 className="to-base-subtitle font-roboto leading-line">
            Endereço de Entrega
          </h2>
          <h3 className="mt-0.5 font-roboto text-sm leading-line text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </h3>
        </div>
      </div>

      <form className="mt-8 grid grid-cols-6 grid-rows-4 gap-4">
        <div className="col-span-2">
          <InputForm placeholder="CEP" />
        </div>
        <div className="col-span-6 row-start-2">
          <InputForm placeholder="Rua" />
        </div>
        <div className="col-span-2 row-start-3">
          <InputForm placeholder="Número" />
        </div>
        <div className="col-span-4 col-start-3 row-start-3">
          <InputForm placeholder="Complemento" opcional />
        </div>
        <div className="col-span-2 row-start-4">
          <InputForm placeholder="Bairro" />
        </div>
        <div className="col-span-3 col-start-3 row-start-4">
          <InputForm placeholder="Cidade" />
        </div>
        <div className="col-start-6 row-start-4">
          <InputForm placeholder="UF" />
        </div>
      </form>
    </div>
  );
}
