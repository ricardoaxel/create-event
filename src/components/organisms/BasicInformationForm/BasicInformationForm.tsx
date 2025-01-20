import React, { useCallback } from "react";
import { FormikProps } from "formik";

import {
  FormFieldContainer,
  ToggleButton,
  Selector,
  InputText,
  ImagePicker,
  LabeledCheckbox,
} from "@components/molecules";
import { FormTemplate } from "@components/templates";
import { SelectorOption } from "@components/molecules/Selector/Selector";
import { toast } from "@utils";
import { FormValues } from "src/pages/CreateEventPage/CreateEventPage";
import basicInfoData from "../../../data/basicInfoData.json";

interface BasicInformationFormProps {
  formProps: FormikProps<FormValues>;
}

export const BasicInformationForm: React.FC<BasicInformationFormProps> = ({
  formProps,
}) => {
  const options = basicInfoData.eventTypes;

  const {
    basicInformation: {
      isEventEnabled,
      eventType,
      eventName,
      banner,
      hasOverlayTitle,
      overlayTitle,
    },
  } = formProps.values;

  const {
    basicInformation: {
      eventName: eventNameError,
      overlayTitle: overlayTitleError,
      banner: bannerError,
    } = {},
  } = formProps.errors;

  const onImageError = (errorMsg: string) => toast(errorMsg);

  const handleToggleChange = (value: boolean) => {
    formProps.setFieldValue("basicInformation.isEventEnabled", value);
  };

  const handleEventTypeChange = (selected: SelectorOption) => {
    formProps.setFieldValue("basicInformation.eventType", selected);
  };

  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("basicInformation.eventName", e.target.value);
  };

  const handleBannerImageUpload = (image: string) => {
    formProps.setFieldValue("basicInformation.banner", image);
  };

  const handleHasOverlayTitleChange = (value: boolean) => {
    formProps.setFieldValue("basicInformation.hasOverlayTitle", value);
  };

  const handleOverlayTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("basicInformation.overlayTitle", e.target.value);
  };

  const imagePickerBannerText = hasOverlayTitle ? overlayTitle : "";

  return (
    <FormTemplate>
      <ToggleButton
        leftText="Enable Event"
        rightText="Disable Event"
        handleToggle={handleToggleChange}
        leftSideActive={isEventEnabled}
        className="self-center"
      />
      <div className="flex gap-5">
        <FormFieldContainer
          label="Event Type"
          className="flex-1"
          renderInput={(inputProps) => (
            <Selector
              options={options}
              value={eventType}
              onChange={handleEventTypeChange}
              {...inputProps}
            />
          )}
        />

        <FormFieldContainer
          label="Event Name"
          className="flex-1"
          warningMessage={eventNameError}
          renderInput={(inputProps) => (
            <InputText
              value={eventName}
              onChange={handleEventNameChange}
              {...inputProps}
            />
          )}
        />
      </div>
      <FormFieldContainer
        label="Banner"
        warningMessage={bannerError}
        renderInput={(inputProps) => (
          <ImagePicker
            onImageUpload={handleBannerImageUpload}
            overlayTitle={imagePickerBannerText}
            defaultImage={banner}
            onImageError={onImageError}
            hasWarning={!!bannerError}
            {...inputProps}
          />
        )}
      />
      <LabeledCheckbox
        checked={hasOverlayTitle}
        onChange={handleHasOverlayTitleChange}
        label="Overlay Title on Banner"
      />
      {hasOverlayTitle && (
        <FormFieldContainer
          label="Overlay Title"
          warningMessage={overlayTitleError}
          renderInput={(inputProps) => (
            <InputText
              value={overlayTitle}
              onChange={handleOverlayTitleChange}
              {...inputProps}
            />
          )}
        />
      )}
    </FormTemplate>
  );
};
