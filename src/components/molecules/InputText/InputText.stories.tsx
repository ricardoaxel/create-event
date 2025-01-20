import React, { useState } from "react";
import { InputText, InputTextProps } from "./InputText";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Molecules/InputText",
  component: InputText,
} as Meta;

const Template: StoryFn<InputTextProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("Input blurred", e.target.value);
  };

  return (
    <InputText
      {...args}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      inputContainerClasses="text-secondary"
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Type here",
  inputContainerClasses: "input-class",
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  value: "",
  placeholder: "Enter your name",
  inputContainerClasses: "input-class",
};

export const PreFilledInput = Template.bind({});
PreFilledInput.args = {
  value: "Hello!",
  placeholder: "Type here",
  inputContainerClasses: "input-class",
};
