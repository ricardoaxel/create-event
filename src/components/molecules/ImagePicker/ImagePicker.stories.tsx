import { Meta, StoryFn } from "@storybook/react";
import { festival } from "@assets";

import { ImagePicker } from "./ImagePicker";

export default {
  title: "Molecules/ImagePicker",
  component: ImagePicker,
  argTypes: {
    onImageUpload: { action: "imageUploaded" },
    onImageError: { action: "imageError" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <ImagePicker
    {...args}
    onImageError={() => alert("Upload an png/jpg image")}
  />
);

export const Default = Template.bind({});
Default.args = {};

export const WithDefaultImage = Template.bind({});
WithDefaultImage.args = {
  defaultImage: festival,
};

export const WithImageAndOverlayTitle = Template.bind({});
WithImageAndOverlayTitle.args = {
  defaultImage: festival,
  overlayTitle: "Your Image Here",
};

export const WithOnImageUpload = Template.bind({});
WithOnImageUpload.args = {
  onImageUpload: (image: string) => alert("Image uploaded: " + image),
  onImageError: (message: string) => alert("Error: " + message),
};

export const WithWarning = Template.bind({});
WithWarning.args = {
  hasWarning: true,
  onImageUpload: (image: string) => alert("Image uploaded: " + image),
  onImageError: (message: string) => alert("Error: " + message),
};
