import { CircleText } from "@components/atoms";
import clsx from "clsx";

export interface StepProps {
  title: string;
  stepNumber: string;
  isSelected?: boolean;
  type?: "success" | "inactive" | "default";
  hasIssue?: boolean;
}

export const Step: React.FC<StepProps> = ({
  title,
  stepNumber,
  isSelected = false,
  type = "inactive",
  hasIssue = false,
}) => {
  const containerClasses = clsx(
    "flex rounded-[8px] gap-3 px-2 py-3 items-center border",
    {
      "justify-between": hasIssue,
      "justify-start": !hasIssue,
      "border-selected bg-primary": isSelected,
      "border-transparent": !isSelected,
    }
  );

  return (
    <div className={containerClasses}>
      <CircleText content={stepNumber} type={type} />
      <p className="font-medium text-[0.875rem] text-start flex-1">{title}</p>
      {hasIssue && (
        <CircleText content={stepNumber} size="1rem" type="warning" />
      )}
    </div>
  );
};
