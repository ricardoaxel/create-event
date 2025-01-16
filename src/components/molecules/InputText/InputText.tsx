import clsx from "clsx";
import { Input } from "@headlessui/react";

export interface InputTextProps {
  warningMessage?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  warningMessage,
  value,
  onChange,
  placeholder = "Type here",
}) => {
  const inputClassNames = clsx(
    "w-full h-[48px] rounded-[8px] font-medium text-[14px] px-[12px] flex flex-row items-center justify-between gap-2",
    "focus:outline-none border",
    "transition-colors duration-200 ease-in-out",
    warningMessage
      ? "border-warning bg-warning/10 focus:border-warning focus:ring-warning"
      : "border-transparent bg-selection focus:border-primary/20 focus:ring-primary/20",
    "placeholder:text-secondary placeholder:font-normal"
  );

  return (
    <div>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClassNames}
      />

      {warningMessage && (
        <p className="mt-2 text-xs text-warning">{warningMessage}</p>
      )}
    </div>
  );
};
