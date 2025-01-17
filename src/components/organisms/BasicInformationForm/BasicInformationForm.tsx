import React, { useState } from "react";
import {
  FormFieldContainer,
  ToggleButton,
  Selector,
  InputText,
  ImagePicker,
  LabeledCheckbox,
} from "@components/molecules";
import { SelectorOption } from "@components/molecules/Selector/Selector";
import { FormTemplate } from "@components/templates";

const options = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export const BasicInformationForm: React.FC = () => {
  const [isEventEnabled, setIsEventEnabled] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState<SelectorOption>(
    options[0]
  );

  const handleChange = (newOption: SelectorOption) => {
    setSelectedOption(newOption);
    console.log("Selected option:", newOption);
  };

  const [inputValue, setInputValue] = useState("");
  const [warningMessage, setWarningMessage] = useState(
    "Error in input happening"
  );

  const [overlayTitle, setOverlayTitle] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (e.target.value.length < 5) {
      setWarningMessage("Input is too short.");
    } else {
      setWarningMessage("");
    }
  };

  return (
    <FormTemplate>
      <ToggleButton
        leftText="Enable Event"
        rightText="Disable Event"
        handleToggle={setIsEventEnabled}
        leftSideActive={isEventEnabled}
        className={"self-center"}
      />
      <div className="flex flex-1 gap-5">
        <FormFieldContainer
          label="Event Name"
          className="flex-1"
          renderInput={(inputProps) => (
            <Selector
              options={options}
              value={selectedOption}
              onChange={handleChange}
              {...inputProps}
            />
          )}
        />

        <FormFieldContainer
          label="Event Name"
          className="flex-1"
          warningMessage={warningMessage}
          renderInput={(inputProps) => (
            <InputText
              value={inputValue}
              onChange={handleInputChange}
              {...inputProps}
            />
          )}
        />
      </div>
      <ImagePicker
        onImageUpload={(c) => console.log(c)}
        overlayTitle="Food & Wine Festival"
      />
      <LabeledCheckbox
        checked={overlayTitle}
        onChange={(overlayTitle) => setOverlayTitle(overlayTitle)}
        label="Overlay Title on Banner"
      />

      <FormFieldContainer
        label="Event Name"
        className="flex-1"
        renderInput={(inputProps) => (
          <InputText
            value={inputValue}
            onChange={handleInputChange}
            {...inputProps}
          />
        )}
      />
    </FormTemplate>
  );
};
