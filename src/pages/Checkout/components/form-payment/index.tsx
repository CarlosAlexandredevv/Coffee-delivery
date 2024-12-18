import { SelectCard } from "@/components/ui/SelectCard";
import { CurrencyDollar } from "phosphor-react";
import { CreditCard, Bank, Money } from "phosphor-react";
export function FormPayment() {
  return (
    <main className="mt-3 rounded-md bg-base-card p-10">
      <div className="flex gap-2">
        <CurrencyDollar size={22} className="text-purple" />
        <div>
          <h2 className="to-base-subtitle font-roboto leading-line">
            Pagamento
          </h2>
          <h3 className="mt-0.5 font-roboto text-sm leading-line text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h3>
        </div>
      </div>
      <fieldset className="mt-8 grid grid-cols-3 gap-3">
        <SelectCard
          method="CARTÃO DE CRÉDITO"
          icon={<CreditCard className="text-purple" />}
          name="payment-method"
        />
        <SelectCard
          method="CARTÃO DE DÉBITO"
          icon={<Bank className="text-purple" />}
          name="payment-method"
        />
        <SelectCard
          method="DINHEIRO"
          icon={<Money className="text-purple" />}
          name="payment-method"
        />
      </fieldset>
    </main>
  );
}
