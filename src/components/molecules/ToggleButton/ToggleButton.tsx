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
      className={` min-w-[288px] min-h-[40px] bg-accent/10 relative inline-flex overflow-hidden whitespace-nowrap rounded-lg border border-accent/40 ${className}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-[52%] rounded-lg bg-accent transition-all duration-200 ${
          leftSideActive ? "translate-x-0" : "translate-x-[100%]"
        }`}
      ></div>

      <Button
        label={leftText}
        onClick={handleClickLeft}
        className={`bg-transparent w-[52%] ${
          leftSideActive ? "" : "text-accent"
        }`}
        type="button"
      />

      <Button
        label={rightText}
        onClick={handleClickRight}
        className={`bg-transparent w-[48%] ${
          !leftSideActive ? "" : "text-accent"
        }`}
        type="button"
      />
    </div>
  );
};
