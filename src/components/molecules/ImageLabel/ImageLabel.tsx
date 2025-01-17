import React from "react";

import { add } from "@assets";

interface ImageLabelProps {
  label: string;
  imageSrc?: string;
  onClick?: () => void;
  className?: string;
}

export const ImageLabel: React.FC<ImageLabelProps> = ({
  label,
  imageSrc = add,
  onClick,
  className = "",
}) => {
  return (
    <label
      className={`flex items-center gap-2 cursor-pointer hover:text-primary 0 hover:shadow-md transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={label}
        className="w-6 h-6 object-contain transition-opacity duration-300"
      />
      <span className="font-semibold text-sm text-inherit">{label}</span>
    </label>
  );
};
