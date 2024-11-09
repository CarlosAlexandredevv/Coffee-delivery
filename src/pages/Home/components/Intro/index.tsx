import hero from '../../../../assets/hero.png';
export function Intro() {
  return (
    <section className="flex items-center bg-center bg-cover h-[544px] bg-background bg-home">
      <div className="max-w-container mx-auto flex justify-between">
        <div>
          <h1 className="font-baloo font-extrabold text-5xl leading-line mb-4">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl leading-line text-base-subtitle font-roboto max-w-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <img src={hero} />
      </div>
    </section>
  );
}
