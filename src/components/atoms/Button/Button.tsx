export interface ButtonProps {
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  type?: "primary" | "secondary";
  noBorder?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  width = "120px",
  height = "48px",
  type = "primary",
  noBorder = false,
}) => {
  const typeClasses =
    type === "primary"
      ? "bg-accent text-white border-transparent"
      : "border-accent text-accent";

  const borderClass = noBorder ? "" : "border";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width, height }}
      className={`cursor-pointer text-sm font-bold rounded-[8px] flex justify-center items-center transition-all duration-500 ${borderClass} ${typeClasses}`}
    >
      {label}
    </button>
  );
};
