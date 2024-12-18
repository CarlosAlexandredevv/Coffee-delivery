import { BinIcon } from "./BinIcon";
import { InputNumber } from "./InputNumber";

export function CardCart() {
  return (
    <div className="flex gap-5 bg-base-card">
      <img
        className="size-16"
        src="src\assets\coffees\tradicional.png"
        alt=""
      />
      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <span className="font-roboto leading-line text-base-subtitle">
            Expresso Tradicional
          </span>
          <span className="font-roboto font-bold leading-line text-base-text">
            R$ 9,90
          </span>
        </div>

        <div className="mt-2 flex gap-2">
          <InputNumber />
          <BinIcon />
        </div>
      </div>
    </div>
  );
}
