import { ButtonCart } from "@/components/ui/ButtonCart";
import { CardCart } from "@/components/ui/CardCart";

export function CoffeesCart() {
  return (
    <div>
      <CardCart />
      <div className="my-6 h-px w-full bg-base-button"></div>
      <CardCart />
      <div className="my-6 h-px w-full bg-base-button"></div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-roboto text-sm leading-line text-base-text">
            Total de itens
          </span>
          <span className="font-roboto leading-line text-base-text">
            R$ 29,70
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-roboto text-sm leading-line text-base-text">
            Entrega
          </span>
          <span className="font-roboto leading-line text-base-text">
            R$ 3,50
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-roboto text-[20px] font-bold leading-line text-base-subtitle">
            Total
          </span>
          <span className="font-roboto text-[20px] font-bold leading-line text-base-subtitle">
            R$ 33,20
          </span>
        </div>
        <ButtonCart />
      </div>
    </div>
  );
}
