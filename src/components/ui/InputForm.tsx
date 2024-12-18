interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  opcional?: boolean;
}

export function InputForm({ opcional = false, ...props }: InputFormProps) {
  return (
    <div className="relative flex items-center justify-between rounded border border-base-button bg-base-input p-3 focus-within:border-yellow-dark dark:border-zinc-600 dark:bg-zinc-700">
      <input
        className="w-full rounded bg-transparent font-roboto text-sm leading-line text-base-text outline-none placeholder:text-base-label focus:placeholder:text-transparent dark:text-zinc-100"
        {...props}
      />
      {opcional && (
        <span className="font-roboto text-xs italic leading-line text-base-label">
          Opcional
        </span>
      )}
    </div>
  );
}
