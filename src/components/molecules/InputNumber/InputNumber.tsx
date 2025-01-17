import React, { useEffect } from "react";

import { ArrowIcon } from "@components/icons";

interface InputNumberProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const numberValue = parseInt(value, 10);

  useEffect(() => {
    if (numberValue < min) {
      onChange({
        target: { value: min.toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (numberValue > max) {
      onChange({
        target: { value: max.toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [value, min, max, onChange]);

  const handleIncrease = () => {
    if (numberValue < max) {
      onChange({
        target: { value: (numberValue + 1).toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleDecrease = () => {
    if (numberValue > min) {
      onChange({
        target: { value: (numberValue - 1).toString() },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Allow single "0" or valid numbers without leading zeros
    if (inputValue === "0" || /^[1-9]\d*$/.test(inputValue)) {
      onChange({
        target: { value: inputValue },
      } as React.ChangeEvent<HTMLInputElement>);
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
          disabled={numberValue >= max}
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
          disabled={numberValue <= min}
        >
          <ArrowIcon strokeHoverColor="rgba(var(--text-primary))" />
        </button>
      </div>
    </div>
  );
};
