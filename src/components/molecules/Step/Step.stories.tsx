import { Meta, StoryFn } from "@storybook/react";
import { Step, StepProps } from "./Step";

export default {
  title: "Molecules/Step",
  component: Step,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "inactive", "default"],
      },
    },
    isSelected: { control: "boolean" },
    hasIssue: { control: "boolean" },
  },
} as Meta<StepProps>;

const Template: StoryFn<StepProps> = (args) => <Step {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  title: "Step Title",
  stepNumber: "1",
  isSelected: true,
  type: "default",
  hasIssue: false,
};

export const SelectedWithIssue = Template.bind({});
SelectedWithIssue.args = {
  title: "Step Title",
  stepNumber: "1",
  isSelected: true,
  type: "default",
  hasIssue: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  title: "Step Title",
  stepNumber: "1",
  isSelected: false,
  type: "inactive",
};

export const InactiveWithIssue = Template.bind({});
InactiveWithIssue.args = {
  title: "Step Title",
  stepNumber: "1",
  isSelected: false,
  type: "inactive",
  hasIssue: true,
};

export const Success = Template.bind({});
Success.args = {
  title: "Success Step Title",
  stepNumber: "5",
  isSelected: false,
  type: "success",
  hasIssue: false,
};
