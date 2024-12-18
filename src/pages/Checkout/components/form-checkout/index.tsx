import { InputForm } from "@/components/ui/InputForm";
import { MapPinLine } from "phosphor-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FormCheckout() {
  const [address, setAddress] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  useEffect(() => {
    if (address.cep.length === 8) {
      async function fetchAddress() {
        try {
          const response = await fetch(
            `https://viacep.com.br/ws/${address.cep}/json/`,
          );
          const data = await response.json();

          if (!data.erro) {
            setAddress((prevState) => ({
              ...prevState,
              logradouro: data.logradouro || "",
              complemento: data.complemento || "",
              bairro: data.bairro || "",
              localidade: data.localidade || "",
              uf: data.uf || "",
            }));
          }
        } catch (error) {
          console.error("Erro ao buscar o endereço:", error);
        }
      }

      fetchAddress();
    }
  }, [address.cep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

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
            <InputForm
              name="cep"
              onChange={handleInputChange}
              placeholder="CEP"
              value={address.cep}
            />
          </div>
          <div className="md:col-span-6 md:row-start-2">
            <InputForm
              name="logradouro"
              placeholder="Rua"
              value={address.logradouro}
              onChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-2 md:row-start-3">
            <InputForm
              name="numero"
              placeholder="Número"
              onChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-4 md:col-start-3 md:row-start-3">
            <InputForm
              name="complemento"
              placeholder="Complemento"
              value={address.complemento}
              onChange={handleInputChange}
              opcional
            />
          </div>
          <div className="md:col-span-2 md:row-start-4">
            <InputForm
              name="bairro"
              placeholder="Bairro"
              value={address.bairro}
              onChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-3 md:col-start-3 md:row-start-4">
            <InputForm
              name="localidade"
              placeholder="Cidade"
              value={address.localidade}
              onChange={handleInputChange}
            />
          </div>
          <div className="row-start-4 md:col-start-6">
            <InputForm
              name="uf"
              placeholder="UF"
              value={address.uf}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </motion.div>
  );
}
