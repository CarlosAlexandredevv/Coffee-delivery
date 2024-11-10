import { CardHome } from '../../../../components/ui/CardHome';

export function CoffeeList() {
  return (
    <section className="dark:bg-zinc-900">
      <div className="max-w-container mx-auto px-3 lg:px-0">
        <h2 className="font-baloo font-extrabold leading-line text-[32px] text-base-subtitle mb-[54px] dark:text-zinc-100">
          Nossos cafés
        </h2>
        <CardHome />
      </div>
    </section>
  );
}
