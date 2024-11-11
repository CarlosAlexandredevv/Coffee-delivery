import { CardHome } from '../../../../components/ui/CardHome';

export function CoffeeList() {
  return (
    <section className="dark:bg-zinc-900 bg-background">
      <div className="max-w-container mx-auto xl:px-0 px-3">
        <h2 className="font-baloo font-extrabold leading-line text-[32px] text-base-subtitle mb-[54px] dark:text-zinc-100">
          Nossos cafés
        </h2>
        <div className="flex justify-center xl:block">
          <div className="grid grid-cols-1 sm:gap-x-6 xl:gap-x-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <CardHome />
          </div>
        </div>
      </div>
    </section>
  );
}
