import { Meta, StoryFn } from "@storybook/react";
import { InputDatePicker } from "./InputDatePicker";

export default {
  title: "Molecules/InputDatePicker",
  component: InputDatePicker,
  argTypes: {
    onChange: { action: "dateChanged" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <InputDatePicker
    inputContainerClasses="w-[50vw] "
    value={null}
    onChange={function (): void {
      throw new Error("Function not implemented.");
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  value: [new Date(2025, 0, 5), new Date(2025, 0, 15)],
};

export const WithMinDate = Template.bind({});
WithMinDate.args = {
  value: [new Date(2025, 0, 10), new Date(2025, 0, 20)],
  minDate: new Date(2025, 0, 5),
};

export const WithMaxDate = Template.bind({});
WithMaxDate.args = {
  value: [new Date(2025, 0, 10), new Date(2025, 0, 20)],
  maxDate: new Date(2025, 0, 25),
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: [new Date(2025, 0, 10), new Date(2025, 0, 20)],
  disabled: true,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  value: [new Date(2025, 0, 10), new Date(2025, 0, 20)],
  inputContainerClasses: "bg-gray-300 p-4 rounded w-80",
};
