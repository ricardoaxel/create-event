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
    <div className="mt-5 p-5 border-selected  rounded-[8px] border flex-1 flex  flex-col gap-5">
      <ToggleButton
        leftText="Enable Event"
        rightText="Disable Event"
        handleToggle={setIsEventEnabled}
        leftSideActive={isEventEnabled}
        className={"self-center"}
      />
      <div className="flex flex-1 gap-5">
        <FormFieldContainer label="Email" className="flex-1">
          <Selector
            options={options}
            value={selectedOption}
            onChange={handleChange}
          />
        </FormFieldContainer>
        <FormFieldContainer label="Event Name" className="flex-1">
          <InputText
            warningMessage={warningMessage}
            value={inputValue}
            onChange={handleInputChange}
          />
        </FormFieldContainer>
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
    </div>
  );
};
