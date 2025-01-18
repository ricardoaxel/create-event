import { Input } from "@headlessui/react";

export interface InputTextProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputContainerClasses?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  onBlur,
  placeholder = "Type here",
  inputContainerClasses,
}) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className={inputContainerClasses}
    />
  );
};
