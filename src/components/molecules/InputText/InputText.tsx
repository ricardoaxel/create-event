import { Input } from "@headlessui/react";

export interface InputTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputContainerClasses?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder = "Type here",
  inputContainerClasses,
}) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={inputContainerClasses}
    />
  );
};
