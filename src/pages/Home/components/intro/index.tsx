import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import hero from '../../../../assets/hero.png';
import { Icons } from '../icons';
import { motion } from 'framer-motion';
export function Intro() {
  return (
    <section className="flex lg:items-center bg-center bg-cover min-h-[444px] lg:min-h-[544px] bg-background bg-home px-3 overflow-x-hidden dark:bg-zinc-900 dark:bg-home">
      <div className="max-w-container mx-auto grid lg:grid-cols-[1.5fr_1fr] md:grid-cols-2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <h1 className="font-baloo font-extrabold text-3xl lg:text-5xl max-w-xl leading-line mb-4 dark:text-zinc-100">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl leading-line text-base-subtitle font-roboto max-w-xl dark:text-zinc-400">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="grid lg:grid-cols-[0.2fr_0.5fr] gap-5 mt-6 lg:mt-16">
            <Icons
              bg="bg-yellow-dark"
              icon={<ShoppingCart weight="fill" />}
              content="Compra simples e segura"
            />
            <Icons
              bg="bg-base-text"
              icon={<Package weight="fill" />}
              content="Embalagem mantém o café intacto"
            />
            <Icons
              bg="bg-yellow"
              icon={<Timer weight="fill" />}
              content="Entrega rápida e rastreada"
            />
            <Icons
              bg="bg-purple"
              icon={<Coffee weight="fill" />}
              content="O café chega fresquinho até você"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <img className="my-6 md:my-0" src={hero} alt="hero coffee" />
        </motion.div>
      </div>
    </section>
  );
}
