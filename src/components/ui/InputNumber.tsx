import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';

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
    <div className="flex items-center bg-base-button gap-1 p-2 rounded-md">
      <Minus
        className="text-purple hover:text-purple-dark duration-300 cursor-pointer"
        size={14}
        onClick={handleDecrement}
      />
      <input
        className="bg-transparent text-center font-roboto leading-line text-base-title size-5 outline-none"
        value={value}
      />
      <Plus
        className="text-purple hover:text-purple-dark duration-300 cursor-pointer"
        size={14}
        onClick={handleIncrement}
      />
    </div>
  );
}
