import { Trash } from "phosphor-react";

export function BinIcon() {
  return (
    <div className="flex items-center gap-1 rounded-md bg-base-button px-2 py-1 duration-300 hover:bg-base-hover">
      <Trash className="text-purple" />
      <span className="font-roboto text-xs leading-[1.6] text-base-text">
        REMOVER
      </span>
    </div>
  );
}
