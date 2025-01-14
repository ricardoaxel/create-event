import { CircleText, CircleTextProps } from "./CircleText";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/CircleText",
  component: CircleText,
  argTypes: {
    content: { control: "text" },
    bgColor: {
      control: "text",
      description: "Tailwind background color class (e.g., 'bg-blue-500')",
      defaultValue: "bg-accent",
      options: [
        "bg-accent",
        "bg-blue-500",
        "bg-green-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-gray-500",
      ],
    },
    textColor: {
      control: "text",
      description: "Tailwind text color class (e.g., 'text-white')",
      defaultValue: "text-white",
    },
    type: {
      control: {
        type: "radio",
        options: ["default", "success", "disabled"],
      },
    },
  },
} as Meta;

const Template: StoryFn<CircleTextProps> = (args: CircleTextProps) => (
  <CircleText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "0",
  bgColor: "bg-accent",
  textColor: "text-white",
  type: "default",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: "0",
  type: "disabled",
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  content: "3",
  bgColor: "bg-blue-500",
  textColor: "text-red-300",
  type: "default",
};
