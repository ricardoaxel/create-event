import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps } from "./Tooltip";

const meta: Meta<TooltipProps> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `This Tooltip component shows a small box of text when the user hovers over an element. You can customize its position and appearance using the available props.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "text" },
      description: "Unique identifier for the tooltip",
    },
    content: {
      control: { type: "text" },
      description: "Text content displayed in the tooltip",
    },
    place: {
      control: { type: "radio" },
      options: ["top", "right", "bottom", "left"],
      description: "Position of the tooltip relative to the target element",
    },
    className: {
      control: { type: "text" },
      description: "Custom class for additional styling",
    },
  },
  args: {
    id: "default-tooltip",
    content: "Tooltip content",
  },
};

export default meta;

type Story = StoryObj<TooltipProps>;

const TooltipExample = (args: TooltipProps) => (
  <>
    <div data-tooltip-id={args.id} className="cursor-pointer text-accent">
      Hover to see the tooltip
    </div>
    <Tooltip {...args} />
  </>
);

export const TopPosition: Story = {
  args: {
    id: "top-tooltip",
    content: "Tooltip at the top.",
    place: "top",
  },
  render: TooltipExample,
};

export const RightPosition: Story = {
  args: {
    id: "right-tooltip",
    content: "Tooltip on the right.",
    place: "right",
  },
  render: TooltipExample,
};

export const BottomPosition: Story = {
  args: {
    id: "bottom-tooltip",
    content: "Tooltip at the bottom.",
    place: "bottom",
  },
  render: TooltipExample,
};

export const LeftPosition: Story = {
  args: {
    id: "left-tooltip",
    content: "Tooltip on the left.",
    place: "left",
  },
  render: TooltipExample,
};
