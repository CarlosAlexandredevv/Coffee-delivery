import { CoffeesCart } from "./components/coffees-cart";
import { FormCheckout } from "./components/form-checkout";
import { FormPayment } from "./components/form-payment";

export function Checkout() {
  return (
    <main className="mx-auto grid max-w-container grid-cols-[1.3fr_1fr] gap-8 py-6">
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
        <div className="mt-6 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card p-10">
          <CoffeesCart />
        </div>
      </div>
    </main>
  );
}
