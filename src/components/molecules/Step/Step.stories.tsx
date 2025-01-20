import { useState } from "react";
import { Step, StepProps } from "./Step";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Molecules/Step",
  component: Step,
} as Meta;

const Template: StoryFn<StepProps> = (args) => {
  const [isSelected, setIsSelected] = useState(args.isSelected);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return <Step {...args} isSelected={isSelected} onClick={handleClick} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Step 1: Start",
  stepNumber: "1",
  isSelected: false,
  type: "inactive",
  hasIssue: false,
};

export const SelectedStep = Template.bind({});
SelectedStep.args = {
  title: "Step 2: In Progress",
  stepNumber: "2",
  isSelected: true,
  type: "default",
  hasIssue: false,
};

export const SuccessStep = Template.bind({});
SuccessStep.args = {
  title: "Step 3: Completed",
  stepNumber: "3",
  isSelected: false,
  type: "success",
  hasIssue: false,
};

export const StepWithIssue = Template.bind({});
StepWithIssue.args = {
  title: "Step 4: Error",
  stepNumber: "4",
  isSelected: false,
  type: "inactive",
  hasIssue: true,
};

export const SuccessActiveStep = Template.bind({});
SuccessActiveStep.args = {
  title: "Step 5: Active Success",
  stepNumber: "5",
  isSelected: true,
  type: "success",
  hasIssue: false,
};
