import { InputForm } from "@/components/ui/InputForm";
import { MapPinLine } from "phosphor-react";
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CartContext } from "../../../../contexts/CartContext";

const formValidateSchema = zod.object({
  cep: zod.string().length(9),
  logradouro: zod.string().min(3),
  numero: zod.string().min(1),
  complemento: zod.string().optional(),
  bairro: zod.string().min(3),
  localidade: zod.string().min(3),
  uf: zod.string().length(2),
});

type FormData = zod.infer<typeof formValidateSchema>;

export function FormCheckout() {
  const { setIsFormValid } = useContext(CartContext);

  const {
    control,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formValidateSchema),
    mode: "onChange",
    defaultValues: {
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
    },
  });

  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid, setIsFormValid]);

  const cepValue = watch("cep");

  useEffect(() => {
    if (cepValue && cepValue.length === 8) {
      async function fetchAddress() {
        try {
          const response = await fetch(
            `https://viacep.com.br/ws/${cepValue}/json/`,
          );
          const data = await response.json();

          if (!data.erro) {
            for (const [key, value] of Object.entries(data)) {
              if (key in data) {
                setValue(key as keyof FormData, String(value) || "");
              }
            }
          }
        } catch (error) {
          console.error("Erro ao buscar o endereço:", error);
        }
      }

      fetchAddress();
    }
  }, [cepValue, setValue]);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: -100, opacity: 0 }}
      className="mt-6 rounded-md bg-base-card p-10 dark:bg-zinc-800"
    >
      <div className="flex gap-2">
        <MapPinLine size={22} className="text-yellow-dark" />
        <div>
          <h2 className="font-roboto leading-line text-base-subtitle dark:text-zinc-100">
            Endereço de Entrega
          </h2>
          <h3 className="mt-0.5 font-roboto text-sm leading-line text-base-text dark:text-zinc-400">
            Informe o endereço onde deseja receber seu pedido
          </h3>
        </div>
      </div>

      <form className="mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4">
          <div className="md:col-span-2">
            <Controller
              name="cep"
              control={control}
              render={({ field }) => (
                <InputForm placeholder="CEP" maxLength={8} {...field} />
              )}
            />
          </div>
          <div className="md:col-span-6 md:row-start-2">
            <Controller
              name="logradouro"
              control={control}
              render={({ field }) => <InputForm placeholder="Rua" {...field} />}
            />
          </div>
          <div className="md:col-span-2 md:row-start-3">
            <Controller
              name="numero"
              control={control}
              render={({ field }) => (
                <InputForm placeholder="Número" {...field} />
              )}
            />
          </div>
          <div className="md:col-span-4 md:col-start-3 md:row-start-3">
            <Controller
              name="complemento"
              control={control}
              render={({ field }) => (
                <InputForm placeholder="Complemento (opcional)" {...field} />
              )}
            />
          </div>
          <div className="md:col-span-2 md:row-start-4">
            <Controller
              name="bairro"
              control={control}
              render={({ field }) => (
                <InputForm placeholder="Bairro" {...field} />
              )}
            />
            {errors.bairro && <p>{errors.bairro.message}</p>}
          </div>
          <div className="md:col-span-3 md:col-start-3 md:row-start-4">
            <Controller
              name="localidade"
              control={control}
              render={({ field }) => (
                <InputForm placeholder="Cidade" {...field} />
              )}
            />
            {errors.localidade && <p>{errors.localidade.message}</p>}
          </div>
          <div className="row-start-4 md:col-start-6">
            <Controller
              name="uf"
              control={control}
              render={({ field }) => <InputForm placeholder="UF" {...field} />}
            />
            {errors.uf && <p>{errors.uf.message}</p>}
          </div>
        </div>
      </form>
    </motion.div>
  );
}
