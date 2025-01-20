import React, { useCallback } from "react";
import {
  FormFieldContainer,
  ImageLabel,
  InputDatePicker,
  InputNumber,
  InputText,
  Selector,
} from "@components/molecules";
import { FormTemplate } from "@components/templates";
import { FormikContextType } from "formik";
import { FormValues } from "src/pages/CreateEventPage/CreateEventPage";
import { trash } from "@assets";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DatesFormProps {
  formProps: FormikContextType<FormValues>;
}

export const DatesForm: React.FC<DatesFormProps> = React.memo(
  ({ formProps }) => {
    const {
      bookableRangeDates,
      defaultCheckInOutDates,
      eventDates,
      taxesAndFees,
    } = formProps.values.dates;

    const {
      bookableRangeDates: bookableRangeDatesError,
      defaultCheckInOutDates: defaultCheckInOutDatesError,
      eventDates: eventDatesErrors,
      taxesAndFees: taxesAndFeesErrors,
    } = formProps.errors.dates || {};

    const handleBookableRangeDates = useCallback(
      (date: Value) => {
        if (Array.isArray(date)) {
          const updatedEventDates = eventDates.map(([start, end]) => {
            // Check if the start or end date is outside the new bookable range
            if (
              (start && (start < date[0]! || start > date[1]!)) ||
              (end && (end < date[0]! || end > date[1]!))
            ) {
              return [null, null];
            }

            return [start, end];
          });

          formProps.setFieldValue("dates.eventDates", updatedEventDates);

          // Check and update defaultCheckInOutDates if they are outside the new bookable range
          const [checkIn, checkOut] =
            formProps.values.dates.defaultCheckInOutDates;
          if (
            (checkIn && (checkIn < date[0]! || checkIn > date[1]!)) ||
            (checkOut && (checkOut < date[0]! || checkOut > date[1]!))
          ) {
            formProps.setFieldValue("dates.defaultCheckInOutDates", [
              null,
              null,
            ]);
          } else {
            formProps.setFieldValue("dates.defaultCheckInOutDates", [
              checkIn,
              checkOut,
            ]);
          }
        }
        formProps.setFieldValue("dates.bookableRangeDates", date);
      },
      [formProps, eventDates]
    );

    const handleEventDateChange = useCallback(
      (index: number, newDate: ValuePiece | [ValuePiece, ValuePiece]) => {
        const updatedEventDates = [...eventDates];
        updatedEventDates[index] = Array.isArray(newDate)
          ? newDate
          : [newDate, newDate];
        formProps.setFieldValue("dates.eventDates", updatedEventDates);
      },
      [formProps, eventDates]
    );

    const handleAddEventDate = useCallback(() => {
      const updatedEventDates = [...eventDates, [null, null]];
      formProps.setFieldValue("dates.eventDates", updatedEventDates);
    }, [formProps, eventDates]);

    const handleEventDateDelete = useCallback(
      (index: number) => {
        const updatedEventDates = [...eventDates];
        updatedEventDates.splice(index, 1);
        formProps.setFieldValue("dates.eventDates", updatedEventDates);
      },
      [formProps, eventDates]
    );

    const handleTaxesAndFeesChange = (
      index: number,
      field: string,
      value: any
    ) => {
      const updatedTaxesAndFees = [...taxesAndFees];
      updatedTaxesAndFees[index] = {
        ...updatedTaxesAndFees[index],
        [field]: value,
      };
      formProps.setFieldValue("dates.taxesAndFees", updatedTaxesAndFees);
    };

    const handleAddTaxesAndFees = useCallback(() => {
      const updatedTaxesAndFees = [
        ...taxesAndFees,
        { name: "", amount: 0, type: { id: "fixed", name: "Fixed" } },
      ];
      formProps.setFieldValue("dates.taxesAndFees", updatedTaxesAndFees);
    }, [formProps, taxesAndFees]);

    const handleDeleteTaxesAndFees = useCallback(
      (index: number) => {
        const updatedTaxesAndFees = [...taxesAndFees];
        updatedTaxesAndFees.splice(index, 1);
        formProps.setFieldValue("dates.taxesAndFees", updatedTaxesAndFees);
      },
      [formProps, taxesAndFees]
    );

    const handleDefaultCheckInOutDates = useCallback(
      (date: Value) => {
        formProps.setFieldValue("dates.defaultCheckInOutDates", date);
      },
      [formProps, eventDates]
    );

    return (
      <>
        <FormTemplate>
          <FormFieldContainer
            label="Bookable Start & End Dates"
            className="flex-1"
            tooltipMessage="Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida."
            warningMessage={bookableRangeDatesError as string}
            renderInput={(inputProps) => (
              <InputDatePicker
                value={bookableRangeDates}
                onChange={handleBookableRangeDates}
                {...inputProps}
              />
            )}
          />
          {eventDates.map((date: Value, index: number) => (
            <FormFieldContainer
              key={index}
              label="Event Start and End Dates"
              className="flex-1"
              warningMessage={
                eventDatesErrors && (eventDatesErrors[index] as string)
              }
              renderInput={(inputProps) => (
                <div className="flex">
                  <InputDatePicker
                    value={date}
                    onChange={(newDate) =>
                      handleEventDateChange(index, newDate)
                    }
                    disabled={!bookableRangeDates[0]}
                    minDate={bookableRangeDates[0]!}
                    maxDate={bookableRangeDates[1]!}
                    {...inputProps}
                  />
                  {index !== 0 && (
                    <img
                      src={trash}
                      className="ml-[25px] cursor-pointer"
                      onClick={() => handleEventDateDelete(index)}
                    />
                  )}
                </div>
              )}
            />
          ))}
          <ImageLabel
            className="mt-[-10px] ml-[3px]"
            label="Add Event Date Range"
            onClick={handleAddEventDate}
          />
          <FormFieldContainer
            label="Default Check-In & Check-Out Dates"
            className="flex-1"
            warningMessage={defaultCheckInOutDatesError as string}
            renderInput={(inputProps) => (
              <InputDatePicker
                value={defaultCheckInOutDates}
                onChange={handleDefaultCheckInOutDates}
                disabled={!bookableRangeDates[0]}
                minDate={bookableRangeDates[0]!}
                maxDate={bookableRangeDates[1]!}
                {...inputProps}
              />
            )}
          />
        </FormTemplate>
        <div className="flex gap-3 mt-6 flex-col">
          <h3 className="font-medium text-sm">Taxes & Fees</h3>
          {taxesAndFees.map((tax, index) => (
            <div className="flex gap-5">
              <FormFieldContainer
                label="Name"
                className="flex-1"
                warningMessage={
                  taxesAndFeesErrors &&
                  taxesAndFeesErrors[index] &&
                  typeof taxesAndFeesErrors[index] !== "string"
                    ? taxesAndFeesErrors[index].name
                    : ""
                }
                renderInput={(inputProps) => (
                  <InputText
                    value={tax.name}
                    placeholder="Type here"
                    onChange={(e) =>
                      handleTaxesAndFeesChange(index, "name", e.target.value)
                    }
                    {...inputProps}
                  />
                )}
              />

              <FormFieldContainer
                label="Amount"
                className="flex-1"
                renderInput={(inputProps) => (
                  <InputNumber
                    value={tax.amount}
                    showPercentage={tax.type.id === "percentage"}
                    onChange={(e) =>
                      handleTaxesAndFeesChange(index, "amount", e)
                    }
                    {...inputProps}
                  />
                )}
              />

              <FormFieldContainer
                label="Type"
                className="flex-1"
                renderInput={(inputProps) => (
                  <Selector
                    options={[
                      { id: "fixed", name: "Fixed" },
                      { id: "percentage", name: "Percentage" },
                    ]}
                    value={tax.type}
                    onChange={(value) =>
                      handleTaxesAndFeesChange(index, "type", value)
                    }
                    {...inputProps}
                  />
                )}
              />
              <img
                src={trash}
                className="self-end mb-3 cursor-pointer"
                onClick={() => handleDeleteTaxesAndFees(index)}
              />
            </div>
          ))}

          <ImageLabel label="Add New Tax/Fee" onClick={handleAddTaxesAndFees} />
        </div>
      </>
    );
  }
);
