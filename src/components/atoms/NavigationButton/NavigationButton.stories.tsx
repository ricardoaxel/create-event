import { Meta, StoryFn } from "@storybook/react";

import { NavigationButton } from "./NavigationButton";

export default {
  title: "Atoms/NavigationButton",
  component: NavigationButton,
  argTypes: {
    isPrevious: {
      control: "boolean",
      description:
        "Indicates whether the button navigates to the previous item.",
    },
    onClick: {
      action: "clicked",
      description: "Callback function for button click.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the button.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button if true.",
    },
  },
} as Meta<typeof NavigationButton>;

const Template: StoryFn<typeof NavigationButton> = (args) => (
  <NavigationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isPrevious: true,
  onClick: () => alert("Button clicked!"),
  disabled: false,
};

export const NextButton = Template.bind({});
NextButton.args = {
  isPrevious: false,
  onClick: () => alert("Next button clicked!"),
  disabled: false,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  isPrevious: true,
  onClick: () => alert("This should not trigger."),
  disabled: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  isPrevious: true,
  onClick: () => alert("Custom class button clicked!"),
  className: "bg-red-400 hover:bg-red-300",
  disabled: false,
};
