import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import { Selector, SelectorOption, SelectorProps } from "./Selector";

const Template: StoryFn<SelectorProps> = (args) => {
  const [selected, setSelected] = useState(args.value);

  const handleChange = (selected: SelectorOption) => {
    setSelected(selected);
  };

  return (
    <Selector
      {...args}
      value={selected}
      onChange={handleChange}
      inputContainerClasses="w-full"
    />
  );
};

export default {
  title: "Molecules/Selector",
  component: Selector,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, name: "Tom Cook" },
    { id: 2, name: "Wade Cooper" },
    { id: 3, name: "Tanya Fox" },
    { id: 4, name: "Arlene Mccoy" },
    { id: 5, name: "Devon Webb" },
  ],
  value: { id: 1, name: "Tom Cook" },
};
