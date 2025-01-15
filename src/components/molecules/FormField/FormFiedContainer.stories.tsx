import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { InputText } from "../InputText/InputText";
import {
  FormFieldContainerProps,
  FormFieldContainer,
} from "./FormFieldContainer";

export default {
  title: "Molecules/FormFieldContainer",
  component: FormFieldContainer,
  argTypes: {
    label: { control: "text" },
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn<FormFieldContainerProps> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormFieldContainer {...args}>
      <InputText
        value={value}
        onChange={handleChange}
        placeholder="Type here"
      />
    </FormFieldContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  className: "",
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: "Email",
  className: "bg-gray-400 p-4",
};
