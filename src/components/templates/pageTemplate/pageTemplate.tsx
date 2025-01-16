import React, { useEffect, useRef, useState } from "react";

import { StepNavigator } from "@components/organisms";
import { NavigationButton, Button } from "@components/atoms";

interface PageTemplateProps {
  title: string;
  currentStep: number;
  onStepChange: (step: number) => void;
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  currentStep,
  onStepChange,
  children,
}) => {
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

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div className="flex-1 flex overflow-hidden">
      <StepNavigator
        steps={["1", "2", "3"]}
        currentStep={currentStep}
        onStepChange={onStepChange}
      />
      <div
        className={`${isOverflowing ? "pr-[7px]" : ""} flex-1 flex flex-col`}
      >
        <div
          ref={containerRef}
          className={`${
            isOverflowing ? "pr-[7px]" : ""
          } p-5 overflow-auto flex-1 flex flex-col`}
        >
          <h2 className="font-semibold text-2xl">{title}</h2>

          <div>{children}</div>

          <div className="mt-6 flex justify-end gap-6">
            <NavigationButton
              onClick={() => console.log("previous")}
              disabled
            />
            <NavigationButton
              onClick={() => console.log("previous")}
              isPrevious={false}
            />
          </div>

          <Button label="Save" className="self-end mt-10 w-[120px]" />
        </div>
      </div>
    </div>
  );
};
