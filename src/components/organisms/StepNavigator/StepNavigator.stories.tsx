import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { StepData } from "@components/templates/PageTemplate/PageTemplate";

import { StepNavigator } from "./StepNavigator";

export default {
  title: "Organisms/StepNavigator",
  component: StepNavigator,
} as Meta;

export const Default: StoryFn = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: StepData<{}>[] = [
    {
      title: "Step 1",
      key: "step1",
      stepState: null,
      component: () => <div>Step 1 Content</div>,
    },
    {
      title: "Step 2",
      key: "step2",
      stepState: null,
      component: () => <div>Step 2 Content</div>,
    },
    {
      title: "Step 3",
      key: "step3",
      stepState: null,
      component: () => <div>Step 3 Content</div>,
    },
  ];

  return (
    <StepNavigator
      steps={steps}
      currentStep={currentStep}
      onStepChange={(step) => setCurrentStep(step)}
    />
  );
};

export const WithIssues: StoryFn = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps: StepData<{}>[] = [
    {
      title: "Step 1",
      key: "step1",
      stepState: "hasIssues",
      component: () => <div>Step 1 Content</div>,
    },
    {
      title: "Step 2",
      key: "step2",
      stepState: "hasIssues",
      component: () => <div>Step 2 Content</div>,
    },
    {
      title: "Step 3",
      key: "step3",
      stepState: "hasIssues",
      component: () => <div>Step 3 Content</div>,
    },
  ];

  return (
    <StepNavigator
      steps={steps}
      currentStep={currentStep}
      onStepChange={(step) => setCurrentStep(step)}
    />
  );
};

export const AllSuccess: StoryFn = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps: StepData<{}>[] = [
    {
      title: "Personal Details",
      key: "personalDetails",
      stepState: "completed",
      component: () => <div>Personal Details Content</div>,
    },
    {
      title: "Account Setup",
      key: "accountSetup",
      stepState: "completed",
      component: () => <div>Account Setup Content</div>,
    },
    {
      title: "Review & Submit",
      key: "reviewSubmit",
      stepState: "completed",
      component: () => <div>Review & Submit Content</div>,
    },
  ];

  return (
    <StepNavigator
      steps={steps}
      currentStep={currentStep}
      onStepChange={(step) => setCurrentStep(step)}
    />
  );
};
