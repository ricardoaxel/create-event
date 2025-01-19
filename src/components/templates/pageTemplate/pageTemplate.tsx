import React, { useEffect, useRef, useState } from "react";
import { StepNavigator } from "@components/organisms";
import { NavigationButton, Button } from "@components/atoms";
import { FormikContextType } from "formik";

interface StepData<T> {
  title: string;
  component: React.ComponentType<{ formProps: FormikContextType<T> }>;
}

import { FormikProps } from "formik";

interface PageTemplateProps<T> {
  currentStep: number;
  onStepChange: (step: number) => void;
  steps: StepData<T>[];
  formProps: FormikProps<T>;
}

export const PageTemplate = <T extends {}>({
  currentStep,
  onStepChange,
  steps,
  formProps,
}: PageTemplateProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (containerRef.current) {
      const hasOverflow =
        containerRef.current.scrollHeight > containerRef.current.clientHeight ||
        containerRef.current.scrollWidth > containerRef.current.clientWidth;
      setIsOverflowing(hasOverflow);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    const observer = new MutationObserver(() => {
      checkOverflow();
    });

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
  }, []);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const previousStep = () => onStepChange(currentStep - 1);
  const nextStep = () => onStepChange(currentStep + 1);

  const { title, component: Component } = steps[currentStep];

  return (
    <div className="flex-1 flex overflow-hidden">
      <StepNavigator
        steps={steps}
        currentStep={currentStep}
        onStepChange={onStepChange}
      />
      <form
        onSubmit={formProps.handleSubmit}
        className={`${isOverflowing ? "pr-[7px]" : ""} flex-1 flex flex-col`}
      >
        <div
          ref={containerRef}
          className={`${
            isOverflowing ? "pr-[7px]" : ""
          } p-5 overflow-auto flex-1 flex flex-col`}
        >
          <h2 className="font-semibold text-2xl">{title}</h2>
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
            className="self-end mt-10 w-[120px] max-h-[148px] h-[48px]"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
