import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Atoms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: { control: "text" },
    altText: { control: "text" },
  },
  args: {
    altText: "CrewFare Logo",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    altText: "CrewFare Logo",
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: "https://picsum.photos/165/40", // Use a placeholder image URL
    altText: "Placeholder Image",
  },
};

export const NoImage: Story = {
  args: {
    imageUrl: "",
    altText: "Text Header",
  },
};
