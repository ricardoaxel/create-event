import { useState } from "react";
import { InputNumber, InputNumberProps } from "./InputNumber";
import { StoryFn, Meta } from "@storybook/react";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Molecules/InputNumber",
  component: InputNumber,
} as Meta;

const Template: StoryFn<InputNumberProps> = (
  args: JSX.IntrinsicAttributes & InputNumberProps
) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <InputNumber
      {...args}
      value={value}
      onChange={handleChange}
      inputContainerClasses="text-secondary w-[50vw]"
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  inputContainerClasses: "input-class",
};

export const WithPercentage = Template.bind({});
WithPercentage.args = {
  value: 25,
  min: 0,
  max: 100,
  inputContainerClasses: "input-class",
  showPercentage: true,
};

export const WithCustomMinAndMax = Template.bind({});
WithCustomMinAndMax.args = {
  value: 1,
  min: 1,
  max: 3,
  inputContainerClasses: "input-class",
};
