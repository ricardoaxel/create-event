import React, { useState } from "react";
import {
  FormFieldContainer,
  ToggleButton,
  Selector,
  InputText,
  ImagePicker,
  LabeledCheckbox,
} from "@components/molecules";
import { FormTemplate } from "@components/templates";

export const DetailsForm: React.FC = () => {
  return (
    <FormTemplate>
      <FormFieldContainer label="Link" className="flex-1">
        <InputText
          value={"https://crewfare.com/events/event-name/"}
          onChange={() => console.log("asds")}
        />
      </FormFieldContainer>
      <div className="flex gap-5">
        <FormFieldContainer label="Link" className="flex-1">
          <InputText
            value={"https://crewfare.com/events/event-name/"}
            onChange={() => console.log("asds")}
          />
        </FormFieldContainer>
        <FormFieldContainer label="Link" className="flex-1">
          <InputText
            value={"https://crewfare.com/events/event-name/"}
            onChange={() => console.log("asds")}
          />
        </FormFieldContainer>
      </div>
    </FormTemplate>
  );
};
