import React, { useState, useEffect } from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  buttonType?: "primary" | "secondary";
  noBorder?: boolean;
  className?: string;
  animate?: boolean;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  buttonType = "primary",
  noBorder = false,
  className,
  animate = false,
  type = "button",
  ...props
}) => {
  const [clicked, setClicked] = useState(false);

  const typeClasses =
    buttonType === "primary"
      ? "bg-accent border-transparent"
      : "border-accent text-accent";

  const borderClass = noBorder ? "" : "border";

  const buttonClass = `z-20 text-center font-bold transition`;

  useEffect(() => {
    if (animate) {
      setClicked(true);
    }
  }, [animate]);

  const handleAnimationEnd = () => {
    setClicked(false);
  };

  return (
    <button
      onClick={onClick}
      onAnimationEnd={handleAnimationEnd}
      type={type}
      className={`cursor-pointer text-sm min-h-[40px] min-w-[120px] rounded-[8px] flex justify-center items-center transition-all duration-500 ${borderClass} ${typeClasses} ${buttonClass} ${className} ${
        clicked ? "animate-left-right" : ""
      }`}
      {...props}
    >
      {label}
    </button>
  );
};
