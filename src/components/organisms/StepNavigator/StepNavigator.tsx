import { Step } from "@components/molecules";
import { StepData } from "@components/templates/PageTemplate/PageTemplate";

interface StepNavigatorProps<T> {
  steps: StepData<T>[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const StepNavigator = <T,>({
  steps,
  currentStep,
  onStepChange,
}: StepNavigatorProps<T>) => {
  return (
    <nav className="w-[248px] h-full flex flex-col p-5 bg-tertiary ml-[12.5%]">
      <h1 className="font-bold text-[24px] leading-[32px] mb-5">
        Create Event
      </h1>
      {steps.map(({ title, stepState, key }, index) => (
        <Step
          key={key}
          title={title}
          stepNumber={(index + 1).toString()}
          isSelected={currentStep === index}
          type={stepState === "completed" ? "success" : "inactive"}
          hasIssue={stepState === "hasIssues"}
          onClick={() => onStepChange(index)}
        />
      ))}
    </nav>
  );
};
