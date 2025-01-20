import React, { useEffect, useState } from "react";

import { ArrowIcon } from "@components/icons";

export interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  inputContainerClasses?: string;
  showPercentage?: boolean;
}

export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  inputContainerClasses,
  showPercentage = false,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

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
    let inputValue = e.target.value;

    if (showPercentage) {
      inputValue = inputValue.replace("%", "");
    }

    const numericValue = parseInt(inputValue, 10);

    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  const displayValue = isFocused ? value : showPercentage ? `${value}%` : value;

  return (
    <div className="relative flex items-center">
      <input
        ref={inputRef}
        type={isFocused ? "number" : "text"}
        id="quantity"
        name="quantity"
        value={displayValue}
        onChange={handleValueChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
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
