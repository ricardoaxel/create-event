import React from "react";

import { add } from "@assets";

export interface ImageLabelProps {
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
      className={`flex items-center gap-3 cursor-pointer hover:text-primary hover:shadow-md transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={label}
        className=" transition-opacity duration-300"
      />
      <span className="font-semibold text-sm text-success">{label}</span>
    </label>
  );
};
