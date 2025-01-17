import { useState, useCallback } from "react";

export const useStepNavigation = (initialStep: number, totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleStepChange = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps]
  );

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return {
    currentStep,
    handleStepChange,
    isFirstStep,
    isLastStep,
  };
};
