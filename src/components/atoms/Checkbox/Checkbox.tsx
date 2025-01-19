import { SuccessIcon } from "@components/icons";
import { Checkbox as HeadlessCheckbox } from "@headlessui/react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <HeadlessCheckbox
      checked={checked}
      onChange={onChange}
      className={`group size-[18px] flex justify-center items-center rounded-[4px] p-[2px] ${className}
        ${checked ? "ring-transparent" : "ring-text-secondary"} 
        ring-1 ring-inset data-[checked]:bg-success`}
    >
      {checked && <SuccessIcon />}
    </HeadlessCheckbox>
  );
};
