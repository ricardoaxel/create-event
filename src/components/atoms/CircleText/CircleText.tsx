import React from "react";
import clsx from "clsx";

import { success } from "@assets";

export interface CircleTextProps {
  content?: string | React.ReactNode;
  bgColor?: string;
  textColor?: string;
  type?: "success" | "default" | "disabled";
}

export const CircleText: React.FC<CircleTextProps> = ({
  content,
  bgColor = "bg-accent",
  textColor = "text-white",
  type = "default",
}) => {
  const circleColor = clsx({
    "bg-success": type === "success",
    "bg-disabled": type === "disabled",
    [bgColor]: type !== "success" && type !== "disabled",
  });

  const textColorClass = clsx({
    "text-secondary": type === "disabled",
    [textColor]: type !== "success" && type !== "disabled",
  });

  return (
    <div
      className={clsx(
        circleColor,
        textColorClass,
        "font-semibold flex items-center justify-center rounded-full w-[1.5rem] h-[1.5rem] text-[.75rem]"
      )}
    >
      {type === "success" ? (
        <img src={success} alt="Success Logo" className="w-[1rem]" />
      ) : (
        content
      )}
    </div>
  );
};
