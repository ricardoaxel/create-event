import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import { InputText, InputTextProps } from "./InputText";

export default {
  title: "Molecules/InputText",
  component: InputText,
  argTypes: {
    warningMessage: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
} as Meta;

const Template: StoryFn<InputTextProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <InputText
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Type here",
};

export const WithWarning = Template.bind({});
WithWarning.args = {
  warningMessage: "This is a warning message",
  value: "",
  placeholder: "Type here",
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  warningMessage: "",
  value: "",
  placeholder: "Enter your name",
};

export const WithValue = Template.bind({});
WithValue.args = {
  warningMessage: "",
  value: "Hello World",
  placeholder: "Type here",
};
