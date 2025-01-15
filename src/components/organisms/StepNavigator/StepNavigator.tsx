import { Step } from "@components/molecules";
import React from "react";

interface StepNavigatorProps {
  steps: string[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const StepNavigator: React.FC<StepNavigatorProps> = ({
  steps,
  currentStep,
  onStepChange,
}) => {
  return (
    <nav className=" w-[15.5rem] h-full flex flex-col p-5 bg-tertiary ml-[12.5%]">
      <h1 className="font-bold text-[24px] mb-5">Create Event</h1>

      <Step title="Basic Irmation" stepNumber="1" isSelected type="success" />
      <Step
        title="Basition"
        stepNumber="2"
        isSelected
        hasIssue
        type="default"
      />
      <Step title="Basation" stepNumber="3" />
    </nav>
  );
};
