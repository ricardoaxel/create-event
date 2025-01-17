import React, { useState } from "react";
import { FormFieldContainer, InputText } from "@components/molecules";
import { FormTemplate } from "@components/templates";
import { InputNumber } from "@components/atoms";

export const DetailsForm: React.FC = () => {
  const [number, setNumber] = useState("2");

  const handleTextChange = (value: string) => {
    console.log("Text changed:", value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <FormTemplate>
      <FormFieldContainer
        label="Link"
        className="flex-1"
        renderInput={(inputProps) => (
          <InputText
            value={"https://crewfare.com/events/event-name/"}
            onChange={() =>
              handleTextChange("https://crewfare.com/events/event-name/")
            }
            {...inputProps}
          />
        )}
      />
      <div className="flex flex-wrap gap-5">
        <FormFieldContainer
          label="Link"
          className="flex-1 min-w-[calc(50%-10px)]"
          renderInput={(inputProps) => (
            <InputText
              value={"https://crewfare.com/events/event-name/"}
              onChange={() =>
                handleTextChange("https://crewfare.com/events/event-name/")
              }
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Link"
          className="flex-1 min-w-[calc(50%-10px)]"
          renderInput={(inputProps) => (
            <InputText
              value={"https://crewfare.com/events/event-name/"}
              onChange={() =>
                handleTextChange("https://crewfare.com/events/event-name/")
              }
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Link"
          className="flex-1 min-w-[calc(50%-10px)]"
          renderInput={(inputProps) => (
            <InputText
              value={"https://crewfare.com/events/event-name/"}
              onChange={() =>
                handleTextChange("https://crewfare.com/events/event-name/")
              }
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Link"
          className="flex-1 min-w-[calc(50%-10px)]"
          renderInput={(inputProps) => (
            <InputNumber
              value={number}
              onChange={handleNumberChange}
              min={0}
              max={50}
              {...inputProps}
            />
          )}
        />
      </div>
    </FormTemplate>
  );
};
