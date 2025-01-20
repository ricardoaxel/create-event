import React from "react";
import { FormikProps } from "formik";
import {
  FormFieldContainer,
  InputNumber,
  InputText,
} from "@components/molecules";
import { FormTemplate } from "@components/templates";
import { FormValues } from "src/pages/CreateEventPage/CreateEventPage";

interface DetailsFormProps {
  formProps: FormikProps<FormValues>;
}

export const DetailsForm: React.FC<DetailsFormProps> = ({ formProps }) => {
  const {
    subdomain,
    eventAddress,
    featuredHotelsTitle,
    venueName,
    minimumNights,
  } = formProps.values.details;

  const {
    subdomain: subdomainError,
    eventAddress: eventAddressError,
    venueName: venueNameError,
    featuredHotelsTitle: featuredHotelsTitleError,
    minimumNights: minimumNightsError,
  } = formProps.errors.details || {};

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("details.subdomain", e.target.value);
  };

  const handleEventAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("details.eventAddress", e.target.value);
  };

  const handleVenueNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("details.venueName", e.target.value);
  };

  const handleFeaturedHotelsTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    formProps.setFieldValue("details.featuredHotelsTitle", e.target.value);
  };

  const handleMinimumNightsChange = (value: number) => {
    formProps.setFieldValue("details.minimumNights", value);
  };

  return (
    <FormTemplate>
      <FormFieldContainer
        label="Subdomain"
        subLabel="(e.g. crewfare-festival)"
        className="flex-1"
        warningMessage={subdomainError}
        renderInput={(inputProps) => (
          <InputText
            value={subdomain}
            onChange={handleSubdomainChange}
            {...inputProps}
          />
        )}
      />
      <div className="flex flex-wrap gap-5">
        <FormFieldContainer
          label="Event Address"
          className="flex-1 min-w-[calc(50%-10px)]"
          warningMessage={eventAddressError}
          renderInput={(inputProps) => (
            <InputText
              value={eventAddress}
              onChange={handleEventAddressChange}
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Venue Name"
          className="flex-1 min-w-[calc(50%-10px)]"
          warningMessage={venueNameError}
          renderInput={(inputProps) => (
            <InputText
              value={venueName}
              onChange={handleVenueNameChange}
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Featured Hotels Title"
          className="flex-1 min-w-[calc(50%-10px)]"
          warningMessage={featuredHotelsTitleError}
          renderInput={(inputProps) => (
            <InputText
              value={featuredHotelsTitle}
              onChange={handleFeaturedHotelsTitleChange}
              {...inputProps}
            />
          )}
        />
        <FormFieldContainer
          label="Minimum Nights"
          className="flex-1 min-w-[calc(50%-10px)]"
          warningMessage={minimumNightsError}
          renderInput={(inputProps) => (
            <InputNumber
              value={minimumNights}
              onChange={handleMinimumNightsChange}
              min={1}
              max={365}
              {...inputProps}
            />
          )}
        />
      </div>
    </FormTemplate>
  );
};
