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
        className="group flex cursor-pointer items-center gap-3 rounded-md border-2 border-transparent bg-base-button p-4 duration-300 hover:bg-base-hover peer-checked:border-purple peer-checked:bg-purple-light"
      >
        {icon}
        <span className="font-roboto text-xs leading-[1.6] text-base-text group-hover:text-base-subtitle peer-checked:text-base-subtitle">
          {method}
        </span>
      </label>
    </div>
  );
}
