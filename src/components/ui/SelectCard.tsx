interface SelectCardProps {
  method: string;
  icon: JSX.Element;
  name: string;
}

export function SelectCard({ method, icon, name }: SelectCardProps) {
  return (
    <div>
      <input type="radio" id={method} name={name} className="peer hidden" />
      <label
        htmlFor={method}
        className="flex cursor-pointer items-center gap-3 rounded-md border-2 border-transparent bg-base-button p-4 duration-300 hover:bg-base-hover peer-checked:border-purple peer-checked:bg-purple-light dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:peer-checked:bg-zinc-800"
      >
        {icon}
        <span className="font-roboto text-xs leading-[1.6] text-base-text group-hover:text-zinc-100 peer-checked:text-base-subtitle dark:text-zinc-100 peer-checked:dark:text-zinc-400">
          {method}
        </span>
      </label>
    </div>
  );
}
