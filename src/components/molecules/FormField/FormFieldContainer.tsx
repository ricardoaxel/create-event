import React from "react";

export interface FormFieldContainerProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  label,
  children,
  className = "",
}) => {
  return (
    <div className={`form-field-container ${className}`}>
      <label className="block text-sm font-medium ">{label}</label>
      <div className="mt-3">{children}</div>{" "}
    </div>
  );
};
