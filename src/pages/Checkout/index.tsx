import { FormCheckout } from "./components/form-checkout";
import { FormPayment } from "./components/form-payment";

export function Checkout() {
  return (
    <main className="mx-auto my-6 grid max-w-container grid-cols-[1.3fr_1fr] gap-8">
      <div>
        <h1 className="font-baloo text-lg font-bold leading-line text-base-subtitle dark:text-zinc-100">
          Complete seu pedido
        </h1>
        <FormCheckout />
        <FormPayment />
      </div>
      <div>
        <h1 className="font-baloo text-lg font-bold leading-line text-base-subtitle dark:text-zinc-100">
          Cafés selecionados
        </h1>
        <div className="mt-6 bg-base-card p-10"></div>
      </div>
    </main>
  );
}
