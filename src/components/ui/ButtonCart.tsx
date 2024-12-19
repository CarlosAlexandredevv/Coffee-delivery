export function ButtonCart({ ...props }) {
  return (
    <button
      className="mt-6 h-[46px] rounded-md bg-yellow px-3 py-2 font-roboto text-sm font-bold leading-[1.6] text-white duration-300 hover:bg-yellow-dark disabled:cursor-not-allowed disabled:opacity-70"
      {...props}
    >
      CONFIRMAR PEDIDO
    </button>
  );
}
