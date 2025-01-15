import React from "react";

interface SuccessIconProps {
  strokeColor?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const SuccessIcon: React.FC<SuccessIconProps> = ({
  strokeColor = "#141416",
  width = 16,
  height = 16,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.33325 9.33333L5.48859 10.95C5.62616 11.0532 5.79827 11.0992 5.96896 11.0784C6.13965 11.0577 6.29573 10.9718 6.40459 10.8387L11.9999 4"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
