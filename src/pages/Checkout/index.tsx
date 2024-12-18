import { FormCheckout } from "./components/form-checkout";

export function Checkout() {
  return (
    <main className="mx-auto mt-8 grid max-w-container grid-cols-[1.3fr_1fr] gap-8 px-3">
      <div>
        <h1 className="font-baloo text-lg font-bold leading-line text-base-subtitle dark:text-zinc-100">
          Complete seu pedido
        </h1>
        <FormCheckout />
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
