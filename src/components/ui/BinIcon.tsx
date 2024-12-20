import { Trash } from "phosphor-react";

interface BinIconProps {
  onClick: () => void;
}

export function BinIcon({ onClick }: BinIconProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-1 rounded-md bg-base-button px-2 py-1 duration-300 hover:bg-base-hover"
      onClick={onClick}
    >
      <Trash className="text-purple" />
      <span className="font-roboto text-xs leading-[1.6] text-base-text">
        REMOVER
      </span>
    </div>
  );
}
