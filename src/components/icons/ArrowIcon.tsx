import React, { useState } from "react";

interface IconProps {
  width?: string | number;
  height?: string | number;
  strokeColor?: string;
  strokeHoverColor?: string;
  className?: string;
}

export const ArrowIcon: React.FC<IconProps> = ({
  width = 14,
  height = 8,
  strokeColor = "#4FF6B1",
  strokeHoverColor = strokeColor,
  className = "",
}) => {
  const [currentStrokeColor, setCurrentStrokeColor] = useState(strokeColor);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      onMouseEnter={() => setCurrentStrokeColor(strokeHoverColor)}
      onMouseLeave={() => setCurrentStrokeColor(strokeColor)}
    >
      <path
        d="M13 1L7 7L1 1"
        className={`transition-colors duration-150 ease-in-out `}
        stroke={currentStrokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
