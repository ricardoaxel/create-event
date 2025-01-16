import React from "react";

import { ArrowIcon } from "@components/icons";

interface NavigationButtonProps {
  isPrevious?: boolean;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  isPrevious = true,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 size-12 rounded-md flex justify-center items-center bg-selection group
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-accent"} 
        ${className}`}
    >
      <ArrowIcon
        strokeColor={"rgba(var(--text-primary))"}
        className={`transition-transform duration-200 transform group-hover:scale-110  ${
          isPrevious ? "rotate-90" : "-rotate-90"
        }`}
      />
    </button>
  );
};
