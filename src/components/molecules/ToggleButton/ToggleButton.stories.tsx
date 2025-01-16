import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ToggleButton, ToggleButtonProps } from "./ToggleButton";
import { fn } from "@storybook/test";

const meta: Meta<ToggleButtonProps> = {
  title: "Molecules/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    leftText: {
      control: { type: "text" },
      description: "Text for the left side button",
    },
    rightText: {
      control: { type: "text" },
      description: "Text for the right side button",
    },
    leftSideActive: {
      control: { type: "boolean" },
      description: "Controls if the left side button is active",
    },
    handleToggle: {
      action: "toggled",
      description: "Handler for the toggle button click",
    },
  },
};

export default meta;

type Story = StoryFn<ToggleButtonProps>;

export const Default: Story = (args) => <ToggleButton {...args} />;

Default.args = {
  leftText: "Enable Event",
  rightText: "Disable Event",
  leftSideActive: true,
  handleToggle: fn(),
};

export const LeftSideInactive: Story = (args) => <ToggleButton {...args} />;

LeftSideInactive.args = {
  leftText: "Enable Event",
  rightText: "Disable Event",
  leftSideActive: false,
  handleToggle: fn(),
};

export const WithState: Story = () => {
  const [isLeftActive, setIsLeftActive] = useState(true);

  const handleToggle = () => {
    setIsLeftActive((prev) => !prev);
  };

  return (
    <ToggleButton
      leftText="On"
      rightText="Off"
      leftSideActive={isLeftActive}
      handleToggle={handleToggle}
    />
  );
};
