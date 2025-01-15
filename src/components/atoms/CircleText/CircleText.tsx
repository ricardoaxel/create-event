import React from "react";
import clsx from "clsx";

import { warning } from "@assets";
import { SuccessIcon } from "@components/icons";

export interface CircleTextProps {
  content?: string | React.ReactNode;
  bgColor?: string;
  textColor?: string;
  type?: "success" | "warning" | "default" | "inactive";
  size?: string;
}

const imageMap: Record<string, React.ReactNode> = {
  success: <SuccessIcon />,
  warning: <img src={warning} alt="Warning" />,
};

export const CircleText: React.FC<CircleTextProps> = ({
  content,
  bgColor = "bg-accent",
  textColor = "text-white",
  type = "default",
  size = "1.5rem",
}) => {
  const circleColor = clsx({
    "bg-success": type === "success",
    "bg-warning": type === "warning",
    "bg-disabled": type === "inactive",
    [bgColor]: type !== "success" && type !== "warning" && type !== "inactive",
  });

  const textColorClass = clsx({
    "text-secondary": type === "inactive",
    [textColor]:
      type !== "success" && type !== "warning" && type !== "inactive",
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
      {image ? image : content}
    </div>
  );
};
