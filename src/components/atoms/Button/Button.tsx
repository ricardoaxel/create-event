export interface ButtonProps {
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  buttonType?: "primary" | "secondary";
  noBorder?: boolean;
  className?: string;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  width = "120px",
  height = "48px",
  buttonType = "primary",
  noBorder = false,
  className,
  type = "button",
  ...props
}) => {
  const typeClasses =
    buttonType === "primary"
      ? "bg-accent border-transparent"
      : "border-accent text-accent";

  const borderClass = noBorder ? "" : "border";

  const buttonClass = `z-20 text-center font-bold transition ${"text-primary hover:text-white"}`;

  return (
    <button
      onClick={onClick}
      style={{ width, height }}
      type={type}
      className={`cursor-pointer text-sm min-h-[48px] rounded-[8px] flex justify-center items-center transition-all duration-500 ${borderClass} ${typeClasses} ${buttonClass} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
