import { Button } from "@components/atoms";

export interface ToggleButtonProps {
  leftText: string;
  rightText: string;
  leftSideActive?: boolean;
  handleToggle: (leftSideClicked: boolean) => void;
  className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  leftText,
  rightText,
  leftSideActive = true,
  handleToggle,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex border border-accent-opacity rounded-[8px] bg-accent-opacity ${className}`}
    >
      <Button
        label={leftText}
        width="151px"
        height="40px"
        type={leftSideActive ? "primary" : "secondary"}
        onClick={() => handleToggle(true)}
        noBorder
      />
      <Button
        label={rightText}
        width="151px"
        height="40px"
        type={!leftSideActive ? "primary" : "secondary"}
        onClick={() => handleToggle(false)}
        noBorder
      />
    </div>
  );
};
