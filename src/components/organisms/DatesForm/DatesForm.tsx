import React, { useState } from "react";
import {
  FormFieldContainer,
  InputDatePicker,
  InputText,
  Selector,
} from "@components/molecules";
import { FormTemplate } from "@components/templates";
import { SelectorOption } from "@components/molecules/Selector/Selector";

const options = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DatesForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SelectorOption>(
    options[0]
  );

  const [number, setNumber] = useState("2");

  const handleTextChange = (value: string) => {
    console.log("Text changed:", value);
  };

  // The state for dateRange is now typed as Value
  const [dateRange, setDateRange] = useState<Value>([new Date(), new Date()]);

  const handleDateChange = (newDateRange: Value) => {
    setDateRange(newDateRange);
  };

  return (
    <>
      <FormTemplate>
        <FormFieldContainer
          label="Bookable Start & End Dates"
          className="flex-1"
          tooltipMessage="Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida."
          renderInput={(inputProps) => (
            <InputDatePicker
              value={dateRange}
              onChange={handleDateChange}
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Event Start and End Dates"
          className="flex-1"
          renderInput={(inputProps) => (
            <InputDatePicker
              value={dateRange}
              onChange={handleDateChange}
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Default Check-In & Check-Out Dates"
          className="flex-1"
          renderInput={(inputProps) => (
            <InputDatePicker
              value={dateRange}
              onChange={handleDateChange}
              {...inputProps}
            />
          )}
        />
      </FormTemplate>
      <div className="flex gap-3 mt-6 flex-col">
        <h3 className="font-medium text-sm">Taxes & Fees</h3>
        <div className="flex gap-5">
          <FormFieldContainer
            label="Name"
            className="flex-1"
            renderInput={(inputProps) => (
              <InputText
                value={""}
                placeholder="Type here"
                onChange={() =>
                  handleTextChange("https://crewfare.com/events/event-name/")
                }
                {...inputProps}
              />
            )}
          />
          <FormFieldContainer
            label="Amount"
            className="flex-1"
            renderInput={(inputProps) => (
              <InputText
                value={""}
                placeholder="0"
                onChange={() =>
                  handleTextChange("https://crewfare.com/events/event-name/")
                }
                {...inputProps}
              />
            )}
          />
          <FormFieldContainer
            label="Event Name"
            className="flex-1"
            renderInput={(inputProps) => (
              <Selector
                options={options}
                value={selectedOption}
                onChange={() => console.log()}
                {...inputProps}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};
