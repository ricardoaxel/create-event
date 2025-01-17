import { Step } from "@components/molecules";
import React from "react";

interface StepData {
  title: string;
  type?: "success" | "inactive" | "default";
  hasIssue?: boolean;
}

interface StepNavigatorProps {
  steps: StepData[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const StepNavigator: React.FC<StepNavigatorProps> = ({
  steps,
  currentStep,
  onStepChange,
}) => {
  return (
    <nav className="w-[15.5rem] h-full flex flex-col p-5 bg-tertiary ml-[12.5%]">
      <h1 className="font-bold text-[24px] mb-5">Create Event</h1>
      {steps.map((step, index) => (
        <Step
          key={index}
          title={step.title}
          stepNumber={(index + 1).toString()}
          isSelected={currentStep === index}
          type={step.type}
          hasIssue={step.hasIssue}
          onClick={() => onStepChange(index)}
        />
      ))}
    </nav>
  );
};
