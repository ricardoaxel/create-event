import React from "react";

interface FormTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const FormTemplate: React.FC<FormTemplateProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mt-5 p-5 border-selected rounded-[12px] border flex flex-col gap-5 ${className}`}
    >
      {children}
    </div>
  );
};
