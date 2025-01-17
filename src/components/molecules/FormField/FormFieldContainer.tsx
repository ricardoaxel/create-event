import React, { ReactElement } from "react";
import clsx from "clsx";
import { Tooltip } from "@components/atoms";
import { info } from "@assets";

export interface InputProps {
  inputContainerClasses?: string;
}

export interface FormFieldContainerProps {
  label: string;
  renderInput: (props: InputProps) => ReactElement; // Render prop for input
  className?: string;
  warningMessage?: string;
  tooltipMessage?: string;
}

export const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  label,
  renderInput,
  className = "",
  warningMessage,
  tooltipMessage,
}) => {
  const inputContainerClasses = clsx(
    "w-full h-[48px] rounded-[8px] font-medium text-[14px] px-[12px] flex flex-row items-center justify-between gap-2",
    "focus:outline-none border",
    "transition-colors duration-200 ease-in-out",
    warningMessage
      ? "border-warning bg-warning/10 focus:border-warning focus:ring-warning"
      : "border-transparent bg-selection focus:border-primary/20 focus:ring-primary/20",
    "placeholder:text-secondary placeholder:font-normal"
  );

  // Prepare the props for the input to pass into the renderInput function
  const inputProps: InputProps = {
    inputContainerClasses: inputContainerClasses,
  };

  return (
    <div className={`form-field-container ${className} `}>
      <label className="flex text-sm font-medium gap-2">
        {label}{" "}
        {tooltipMessage && (
          <>
            <img
              src={info}
              data-tooltip-id="info-tooltip"
              className="cursor-help"
            />
            <Tooltip id="info-tooltip" content={tooltipMessage} place="top" />
          </>
        )}
      </label>

      <div className="mc">
        {renderInput(inputProps)} {/* Render the input using the render prop */}
      </div>
      {warningMessage && (
        <p className="mt-2 text-xs text-warning">{warningMessage}</p>
      )}
    </div>
  );
};
