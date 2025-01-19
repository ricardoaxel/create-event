import { Checkbox } from "@components/atoms";

export interface LabeledCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const LabeledCheckbox: React.FC<LabeledCheckboxProps> = ({
  checked,
  onChange,
  label,
  className,
}) => {
  return (
    <label className={`flex items-center gap-2 ${className}`}>
      <Checkbox checked={checked} onChange={onChange} className="mx-[3px]" />
      <span className="font-medium text-sm">{label}</span>
    </label>
  );
};
