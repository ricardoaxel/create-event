import { Meta, StoryFn } from "@storybook/react";

import { ImageLabel, ImageLabelProps } from "./ImageLabel";
import { add } from "@assets";

export default {
  title: "Molecules/ImageLabel",
  component: ImageLabel,
  argTypes: {
    label: { control: "text" },
    imageSrc: { control: "text" },
    onClick: { action: "clicked" },
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn<ImageLabelProps> = (args) => <ImageLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Add Item",
  imageSrc: add,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: "Add to Cart",
  imageSrc: add,
  className: "bg-gray-200 p-2 rounded",
};

export const WithClickAction = Template.bind({});
WithClickAction.args = {
  label: "Click Me",
  imageSrc: add,
  onClick: () => alert("ImageLabel clicked!"),
};
