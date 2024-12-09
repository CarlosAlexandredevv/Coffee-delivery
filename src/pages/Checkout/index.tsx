import { InputForm } from "@/components/ui/InputForm";

export function Checkout() {
  return (
    <main className="px-3">
      <div className="mx-auto max-w-container">
        <h1 className="font-baloo text-lg font-bold leading-line text-base-subtitle dark:text-zinc-100">
          Complete seu pedido
        </h1>
        <div>
          <InputForm placeholder="Label" opcional />
        </div>
      </div>
    </main>
  );
}
