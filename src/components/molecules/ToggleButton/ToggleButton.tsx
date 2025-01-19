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
  const handleClickLeft = () => handleToggle(true);
  const handleClickRight = () => handleToggle(false);

  return (
    <div
      className={`bg-accent/10 relative inline-flex overflow-hidden whitespace-nowrap rounded-lg border border-accent/40 ${className}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1/2 rounded-lg bg-accent transition-all duration-200 ${
          leftSideActive ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>

      <Button
        label={leftText}
        onClick={handleClickLeft}
        className={`bg-transparent ${leftSideActive ? "" : "text-accent"}`}
        type="button"
      />

      <Button
        label={rightText}
        onClick={handleClickRight}
        className={`bg-transparent ${!leftSideActive ? "" : "text-accent"}`}
        type="button"
      />
    </div>
  );
};
