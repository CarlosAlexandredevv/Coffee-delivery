import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

export function InputNumber() {
  const [value, setValue] = useState(1);

  function handleIncrement() {
    setValue(value + 1);
  }

  function handleDecrement() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  return (
    <div className="flex select-none items-center gap-1 rounded-md bg-base-button p-2">
      <Minus
        className="cursor-pointer text-purple duration-300 hover:text-purple-dark"
        size={14}
        onClick={handleDecrement}
      />
      <input
        className="size-5 bg-transparent text-center font-roboto leading-line text-base-title outline-none"
        value={value}
      />
      <Plus
        className="cursor-pointer text-purple duration-300 hover:text-purple-dark"
        size={14}
        onClick={handleIncrement}
      />
    </div>
  );
}
