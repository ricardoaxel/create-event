import React, { useEffect, useRef, useState, useCallback } from "react";
import { FormikProps, FormikContextType } from "formik";

import { StepNavigator } from "@components/organisms";
import { NavigationButton, Button, CircleText } from "@components/atoms";

export interface StepData<T> {
  title: string;
  component: React.ComponentType<{ formProps: FormikContextType<T> }>;
  key: string;
  stepState: "completed" | "hasIssues" | null;
}

interface PageTemplateProps<T> {
  currentStep: number;
  onStepChange: (step: number) => void;
  steps: StepData<T>[];
  formProps: FormikProps<T>;
  triggerButtonAnimation?: boolean;
  validateFormStatus: () => void;
}

export const PageTemplate = <T extends {}>({
  currentStep,
  onStepChange,
  steps,
  formProps,
  triggerButtonAnimation,
  validateFormStatus,
}: PageTemplateProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (containerRef.current) {
      const hasOverflow =
        containerRef.current.scrollHeight > containerRef.current.clientHeight ||
        containerRef.current.scrollWidth > containerRef.current.clientWidth;
      setIsOverflowing(hasOverflow);
    }
  }, []);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    const observer = new MutationObserver(checkOverflow);
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    return () => {
      window.removeEventListener("resize", checkOverflow);
      observer.disconnect();
    };
  }, [checkOverflow]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const previousStep = useCallback(
    () => onStepChange(currentStep - 1),
    [currentStep, onStepChange]
  );
  const nextStep = useCallback(
    () => onStepChange(currentStep + 1),
    [currentStep, onStepChange]
  );

  const { title, component: Component, stepState } = steps[currentStep];

  return (
    <div className="flex-1 flex overflow-hidden">
      <StepNavigator
        steps={steps}
        currentStep={currentStep}
        onStepChange={onStepChange}
      />
      <form
        onSubmit={formProps?.handleSubmit}
        className={`${isOverflowing ? "pr-[7px]" : ""} flex-1 flex flex-col`}
      >
        <div
          ref={containerRef}
          className={`${
            isOverflowing ? "pr-[7px]" : ""
          } p-5 overflow-y-auto  overflow-x-hidden flex-1 flex flex-col`}
        >
          <h2 className="font-[600] text-[20px] leading-[32px] flex items-center gap-[14px]">
            {title}
            {stepState === "hasIssues" && (
              <CircleText size="20px" type="warning" />
            )}
          </h2>
          <Component formProps={formProps} />
          <div className="mt-6 flex justify-end gap-6">
            <NavigationButton onClick={previousStep} disabled={isFirstStep} />
            <NavigationButton
              onClick={nextStep}
              isPrevious={false}
              disabled={isLastStep}
            />
          </div>
          <Button
            label="Save"
            className="self-end mt-12 w-[120px] max-h-[148px] h-[48px] min-h-[48px]"
            type="submit"
            animate={triggerButtonAnimation}
            onClick={validateFormStatus}
          />
        </div>
      </form>
    </div>
  );
};
