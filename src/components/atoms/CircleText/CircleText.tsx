import React from "react";
import clsx from "clsx";

import { warning } from "@assets";
import { SuccessIcon } from "@components/icons";

export interface CircleTextProps {
  content?: string | React.ReactNode;
  bgColor?: string;
  textColor?: string;
  type?: "success" | "successActive" | "warning" | "default" | "inactive";
  size?: string;
}

const imageMap: Record<string, React.ReactNode> = {
  success: <SuccessIcon />,
  warning: <img src={warning} alt="Warning" />,
  default: null,
  successActive: null,
  inactive: null,
};

export const CircleText: React.FC<CircleTextProps> = ({
  content,
  bgColor = "bg-accent",
  textColor = "text-white",
  type = "default",
  size = "1.5rem",
}) => {
  const isActiveType = type === "success" || type === "successActive";
  const isWarningType = type === "warning";
  const isInactiveType = type === "inactive";

  const circleColor = clsx({
    "bg-success": isActiveType,
    "bg-warning": isWarningType,
    "bg-disabled": isInactiveType,
    [bgColor]: !isActiveType && !isWarningType && !isInactiveType,
  });

  const textColorClass = clsx({
    "text-black": isInactiveType || type === "successActive",
    "text-secondary": isInactiveType,
    [textColor]: !isActiveType && !isWarningType && !isInactiveType,
  });

  const image = imageMap[type];

  return (
    <div
      className={clsx(
        circleColor,
        textColorClass,
        "font-semibold flex items-center justify-center rounded-full text-xs"
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      {image || content}
    </div>
  );
};
