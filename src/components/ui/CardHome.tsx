import { CartAdd } from './CartAdd';
import { InputNumber } from './InputNumber';

export function CardHome() {
  return (
    <div className="flex flex-col h-[310px] max-w-[256px] items-center bg-base-card px-3 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md relative mb-11 dark:bg-zinc-800">
      <img
        className="size-[120px] absolute -top-5"
        src="src\assets\coffees\tradicional.png"
        alt=""
      />
      <span className="text-yellow-dark font-roboto font-bold text-[0.625rem] bg-yellow-light px-2 py-1 rounded-full leading-line mt-28 mb-4">
        TRADICIONAL
      </span>
      <h3 className="font-bold leading-line text-[1.25rem] text-base-subtitle font-baloo dark:text-zinc-100">
        Expresso Americano
      </h3>
      <p className="text-sm font-roboto leading-line text-base-label text-center mt-2 dark:text-zinc-400">
        Café expresso misturado com um pouco de leite quente e espuma
      </p>

      <div className="flex gap-6 mt-auto mr-auto mb-5 ml-3">
        <div className="flex items-center gap-1">
          <span className=" font-roboto leading-line text-base-text dark:text-zinc-400">
            R$
          </span>
          <span className="text-2xl font-extrabold leading-line text-base-text font-baloo dark:text-zinc-200">
            9,90
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <InputNumber />
          <CartAdd />
        </div>
      </div>
    </div>
  );

  //adicionar components de adicionar, diminuir... mt-auto mr-auto mb-5 ml-3
}
