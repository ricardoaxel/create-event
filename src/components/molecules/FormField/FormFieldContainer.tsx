import React, { ReactElement } from "react";
import clsx from "clsx";

export interface InputProps {
  inputContainerClasses?: string;
}

export interface FormFieldContainerProps {
  label: string;
  renderInput: (props: InputProps) => ReactElement; // Render prop for input
  className?: string;
  warningMessage?: string;
}

export const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  label,
  renderInput,
  className = "",
  warningMessage,
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
    <div className={`form-field-container ${className}`}>
      <label className="block text-sm font-medium">{label}</label>
      <div className="mt-3">
        {renderInput(inputProps)} {/* Render the input using the render prop */}
      </div>
      {warningMessage && (
        <p className="mt-2 text-xs text-warning">{warningMessage}</p>
      )}
    </div>
  );
};
