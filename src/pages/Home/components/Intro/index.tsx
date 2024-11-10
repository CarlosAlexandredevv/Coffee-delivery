import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import hero from '../../../../assets/hero.png';
import { IconsIntro } from '../Icons-Intro';
export function Intro() {
  return (
    <section className="flex lg:items-center bg-center bg-cover min-h-[544px] bg-background bg-home px-3 overflow-x-hidden">
      <div className="max-w-container mx-auto grid lg:grid-cols-[1.5fr_1fr] md:grid-cols-2">
        <div>
          <h1 className="font-baloo font-extrabold text-3xl lg:text-5xl max-w-xl leading-line mb-4">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl leading-line text-base-subtitle font-roboto max-w-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="grid lg:grid-cols-[0.2fr_0.5fr] gap-5 mt-6 lg:mt-16">
            <IconsIntro
              bg="bg-yellow-dark"
              icon={<ShoppingCart weight="fill" />}
              content="Compra simples e segura"
            />
            <IconsIntro
              bg="bg-base-text"
              icon={<Package weight="fill" />}
              content="Embalagem mantém o café intacto"
            />
            <IconsIntro
              bg="bg-yellow"
              icon={<Timer weight="fill" />}
              content="Entrega rápida e rastreada"
            />
            <IconsIntro
              bg="bg-purple"
              icon={<Coffee weight="fill" />}
              content="O café chega fresquinho até você"
            />
          </div>
        </div>
        <img className="mt-6 md:mt-0" src={hero} alt="hero coffee" />
      </div>
    </section>
  );
}
