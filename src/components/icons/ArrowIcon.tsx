import React from "react";

interface IconProps {
  width?: string | number;
  height?: string | number;
  strokeColor?: string;
  className?: string;
}

export const ArrowIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  strokeColor = "#4FF6B1",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 9L12 15L6 9"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
