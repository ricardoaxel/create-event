import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormTemplate } from "./FormTemplate";

export default {
  title: "Templates/FormTemplate",
  component: FormTemplate,
} as Meta;

export const Default: StoryFn = () => {
  return (
    <FormTemplate>
      <div>Form Content Goes Here</div>
    </FormTemplate>
  );
};

export const WithCustomClass: StoryFn = () => {
  return (
    <FormTemplate className="bg-gray-100 text-accent">
      <div>Form Content Goes Here with Custom Class</div>
    </FormTemplate>
  );
};

export const WithMultipleChildren: StoryFn = () => {
  return (
    <FormTemplate>
      <div>First Child Component</div>
      <div>Second Child Component</div>
      <div>Third Child Component</div>
    </FormTemplate>
  );
};

export const WithLongContent: StoryFn = () => {
  return (
    <FormTemplate>
      <div>
        <p>
          This is a form template with a lot of content. The purpose of this
          story is to demonstrate how the component behaves when it has a lot of
          text or form fields inside it. The content can extend beyond the
          viewport to test scrolling and layout behavior.
        </p>
        <p>
          This additional content ensures that the form can handle long or
          multiline content inside it.
        </p>
      </div>
    </FormTemplate>
  );
};
