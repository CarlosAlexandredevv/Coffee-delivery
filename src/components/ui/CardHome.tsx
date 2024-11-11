import { CartAdd } from './CartAdd';
import { InputNumber } from './InputNumber';
import { coffeeData } from '../../pages/Home/components/coffee-list/utils/datacoffee';

export function CardHome() {
  return (
    <>
      {coffeeData.map((coffee) => (
        <div
          key={coffee.id}
          className="flex flex-col h-[310px] max-w-[256px] items-center bg-base-card px-4 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md relative mb-11 dark:bg-zinc-800"
        >
          <img
            className="size-[120px] absolute -top-5"
            src={coffee.img}
            alt={coffee.name}
          />

          {coffee.tags.length > 1 ? (
            <div className="flex gap-2 mt-28 mb-4">
              {coffee.tags.map((tag) => (
                <span
                  key={`${coffee.id}-${tag}`}
                  className="text-yellow-dark font-roboto font-bold text-[0.625rem] bg-yellow-light px-2 py-1 rounded-full leading-line"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-yellow-dark font-roboto font-bold text-[0.625rem] bg-yellow-light px-2 py-1 rounded-full leading-line mt-28 mb-4">
              {coffee.tags[0]}
            </span>
          )}

          <h3 className="font-bold leading-line text-[1.25rem] text-base-subtitle font-baloo dark:text-zinc-100">
            {coffee.name}
          </h3>
          <p className="text-sm font-roboto leading-line text-base-label text-center mt-2 dark:text-zinc-400">
            {coffee.description}
          </p>

          <div className="flex gap-4 mt-auto mx-auto mb-5">
            <div className="flex items-center gap-1">
              <span className="font-roboto leading-line text-base-text dark:text-zinc-400">
                R$
              </span>
              <span className="text-2xl font-extrabold leading-line text-base-text font-baloo dark:text-zinc-200">
                {coffee.price.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <InputNumber />
              <CartAdd />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
