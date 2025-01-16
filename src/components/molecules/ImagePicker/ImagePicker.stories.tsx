import { Meta, StoryFn } from "@storybook/react";

import { festival } from "@assets";

import { ImagePicker } from "./ImagePicker";

export default {
  title: "Molecules/ImagePicker",
  component: ImagePicker,
  argTypes: {
    onImageUpload: { action: "imageUploaded" },
  },
} as Meta;

const Template: StoryFn = (args) => <ImagePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithDefaultImage = Template.bind({});
WithDefaultImage.args = {
  defaultImage: festival,
};

export const WithOverlayTitle = Template.bind({});
WithOverlayTitle.args = {
  overlayTitle: "Your Image Here",
};

export const WithOnImageUpload = Template.bind({});
WithOnImageUpload.args = {
  onImageUpload: (image: string) => alert("Image uploaded: " + image),
};
