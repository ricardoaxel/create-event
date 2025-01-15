import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Specifies the type of the button",
    },
    width: {
      control: { type: "text" },
      description: "Width of the button (e.g., '120px', '50%')",
    },
    height: {
      control: { type: "text" },
      description: "Height of the button (e.g., '48px', '3rem')",
    },
    label: {
      control: { type: "text" },
      description: "Label displayed on the button",
    },
    onClick: {
      action: "clicked",
      description: "Handler for click events",
    },
    noBorder: {
      control: { type: "boolean" },
      description: "If true, removes the button's border",
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Primary Button",
    width: "120px",
    height: "48px",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    label: "Secondary Button",
    width: "120px",
    height: "48px",
  },
};

export const CustomSize: Story = {
  args: {
    type: "primary",
    label: "Custom Size Button",
    width: "200px",
    height: "60px",
  },
};

export const NoBorder: Story = {
  args: {
    type: "secondary",
    label: "No Border Button",
    width: "120px",
    height: "48px",
    noBorder: true,
  },
};
