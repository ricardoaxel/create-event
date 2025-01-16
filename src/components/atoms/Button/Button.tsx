export interface ButtonProps {
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  type?: "primary" | "secondary";
  noBorder?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  width = "120px",
  height = "48px",
  type = "primary",
  noBorder = false,
  className,
}) => {
  const typeClasses =
    type === "primary"
      ? "bg-accent border-transparent"
      : "border-accent text-accent";

  const borderClass = noBorder ? "" : "border";

  const buttonClass = `z-20 flex-1 text-center font-bold transition ${"text-primary hover:text-white"}`;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width, height }}
      className={`cursor-pointer text-sm min-h-[48px] rounded-[8px] flex justify-center items-center transition-all duration-500 ${borderClass} ${typeClasses} ${buttonClass} ${className}`}
    >
      {label}
    </button>
  );
};
