import { CircleText } from "@components/atoms";
import clsx from "clsx";

export interface StepProps {
  title: string;
  stepNumber: string;
  isSelected?: boolean;
  type?: "success" | "inactive" | "default";
  hasIssue?: boolean;
  onClick?: () => void;
}

export const Step: React.FC<StepProps> = ({
  title,
  stepNumber,
  isSelected = false,
  type = "inactive",
  hasIssue = false,
  onClick,
}) => {
  const containerClasses = clsx(
    "flex rounded-[8px] gap-3 px-2 h-[48px] items-center border cursor-pointer",
    {
      "justify-between": hasIssue,
      "justify-start": !hasIssue,
      "border-selected bg-primary": isSelected,
      "border-transparent text-primary/70": !isSelected,
    }
  );

  const circleTextType = isSelected ? "default" : type;

  return (
    <div className={containerClasses} onClick={onClick}>
      <CircleText content={stepNumber} type={circleTextType} />
      <p className="font-medium text-[0.875rem] text-start flex-1">{title}</p>
      {hasIssue && (
        <CircleText content={stepNumber} size="1rem" type="warning" />
      )}
    </div>
  );
};
