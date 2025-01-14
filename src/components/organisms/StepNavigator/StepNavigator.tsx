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
      {steps.map((step, index) => (
        <button
          key={index}
          className={`py-2 px-4 mb-2 rounded-md ${
            currentStep === index
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => onStepChange(index)}
        >
          <Step />
        </button>
      ))}
    </nav>
  );
};
