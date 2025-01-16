import { ArrowIcon } from "@components/icons";
import React from "react";

interface NavigationButtonProps {
  isPrevious?: boolean;
  onClick: () => void;
  className?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  isPrevious = true,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 size-12 rounded-md bg-gray-200 hover:bg-gray-300 flex justify-center items-center ${className}`}
    >
      <ArrowIcon
        strokeColor={"var(--text-primary)"}
        className={`${isPrevious ? "" : "-"}rotate-90`}
      />
    </button>
  );
};
