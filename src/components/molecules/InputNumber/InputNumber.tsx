import React, { useEffect } from "react";

import { ArrowIcon } from "@components/icons";

interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  inputContainerClasses?: string;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  inputContainerClasses,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value < min) {
      onChange(min);
    } else if (value > max) {
      onChange(max);
    }
  }, [value, min, max, onChange]);

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);

    if (!isNaN(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <div className="relative flex items-center">
      <input
        ref={inputRef}
        type="number"
        id="quantity"
        name="quantity"
        value={value}
        onChange={handleValueChange}
        min={min}
        max={max}
        className={inputContainerClasses}
      />
      <div className="absolute right-0 flex flex-col pr-[18px] gap-1">
        <button
          type="button"
          onClick={handleIncrease}
          aria-label="Increase quantity"
          disabled={value >= max}
        >
          <ArrowIcon
            className={`transform rotate-180`}
            strokeHoverColor="rgba(var(--text-primary))"
          />
        </button>
        <button
          type="button"
          onClick={handleDecrease}
          aria-label="Decrease quantity"
          disabled={value <= min}
        >
          <ArrowIcon strokeHoverColor="rgba(var(--text-primary))" />
        </button>
      </div>
    </div>
  );
};
