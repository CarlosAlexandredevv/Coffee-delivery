import { CardHome } from "../../../../components/ui/CardHome";

export function CoffeeList() {
  return (
    <section className="bg-background dark:bg-zinc-900">
      <div className="mx-auto max-w-container px-3 xl:px-0">
        <h2 className="mb-[54px] pt-2 font-baloo text-[32px] font-extrabold leading-line text-base-subtitle dark:text-zinc-100">
          Nossos cafés
        </h2>
        <div className="flex justify-center xl:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0">
            <CardHome />
          </div>
        </div>
      </div>
    </section>
  );
}
