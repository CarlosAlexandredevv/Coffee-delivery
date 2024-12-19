import { Minus, Plus } from "phosphor-react";
import { useState, useEffect } from "react";

interface InputNumberProps {
  onChange?: (value: number) => void;
  value?: number;
}

export function InputNumber({ onChange, value = 1 }: InputNumberProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleIncrement() {
    const newValue = inputValue + 1;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  }

  function handleDecrement() {
    if (inputValue > 1) {
      const newValue = inputValue - 1;
      setInputValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
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
        type="number"
        value={inputValue}
        readOnly
      />
      <Plus
        className="cursor-pointer text-purple duration-300 hover:text-purple-dark"
        size={14}
        onClick={handleIncrement}
      />
    </div>
  );
}
