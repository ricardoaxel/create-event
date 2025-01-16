import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LabeledCheckbox, LabeledCheckboxProps } from "./LabeledCheckBox";

export default {
  title: "Molecules/LabeledCheckbox",
  component: LabeledCheckbox,
} as Meta;

const Template: StoryFn<LabeledCheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  return (
    <LabeledCheckbox {...args} checked={checked} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox Label",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checkbox Label",
  checked: true,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: "Checkbox with Custom Class",
  checked: false,
  className: "bg-gray-200",
};
