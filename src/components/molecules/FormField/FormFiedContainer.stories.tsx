import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { InputText } from "../InputText/InputText"; // Import your InputText component
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
    tooltipMessage: { control: "text" },
    warningMessage: { control: "text" },
  },
} as Meta;

const Template: StoryFn<FormFieldContainerProps> = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <FormFieldContainer
      {...args}
      renderInput={(inputProps) => (
        <InputText
          {...inputProps}
          value={value}
          onChange={handleChange}
          placeholder="Type here"
          inputContainerClasses={"text-secondary"}
        />
      )}
    />
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

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Username",
  tooltipMessage: "This is a username input field",
};

export const WithWarningMessage = Template.bind({});
WithWarningMessage.args = {
  label: "Password",
  warningMessage: "Password is too weak",
};
