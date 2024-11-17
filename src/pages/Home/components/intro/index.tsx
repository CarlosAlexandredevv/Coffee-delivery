import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import hero from "../../../../assets/hero.png";
import { Icons } from "../icons";
import { motion } from "framer-motion";
export function Intro() {
  return (
    <section className="flex min-h-[444px] overflow-x-hidden bg-background bg-home bg-cover bg-center px-3 dark:bg-zinc-900 dark:bg-home lg:min-h-[544px] lg:items-center">
      <div className="mx-auto grid max-w-container md:grid-cols-2 lg:grid-cols-[1.5fr_1fr]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <h1 className="mb-4 max-w-xl font-baloo text-3xl font-extrabold leading-line dark:text-zinc-100 lg:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="max-w-xl font-roboto text-xl leading-line text-base-subtitle dark:text-zinc-400">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="mt-6 grid gap-5 lg:mt-16 lg:grid-cols-[0.2fr_0.5fr]">
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
