import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <Checkbox {...args} />;
};

export const NotChecked = Template.bind({});
NotChecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const ToggleStateExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (newState: boolean) => {
    setIsChecked(newState);
  };

  return <Checkbox checked={isChecked} onChange={handleChange} />;
};
