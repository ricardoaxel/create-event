import React from "react";
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
    isEventEnabled,
    eventType,
    eventName,
    banner,
    hasOverlayTitle,
    overlayTitle,
  } = formProps.values;

  const {
    eventName: eventNameError,
    overlayTitle: overlayTitleError,
    banner: bannerError,
  } = formProps.errors;

  const handleEventTypeChange = (selected: SelectorOption) => {
    formProps.setFieldValue("eventType", selected);
  };

  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("eventName", e.target.value);
  };

  const handleOverlayTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formProps.setFieldValue("overlayTitle", e.target.value);
  };

  const handleHasOverlayTitleChange = (value: boolean) => {
    formProps.setFieldValue("hasOverlayTitle", value);
  };

  const handleBannerChange = (image: any) => {
    formProps.setFieldValue("banner", image);
  };

  const handleToggleEventEnabled = (value: boolean) => {
    formProps.setFieldValue("isEventEnabled", value);
  };

  const onImageError = (errorMsg: string) => toast(errorMsg);

  const imagePickerBannerText = hasOverlayTitle ? overlayTitle : "";

  return (
    <FormTemplate>
      <ToggleButton
        leftText="Enable Event"
        rightText="Disable Event"
        handleToggle={handleToggleEventEnabled}
        leftSideActive={isEventEnabled}
        className={"self-center"}
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
              onBlur={formProps.handleBlur("eventName")}
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
            onImageUpload={handleBannerChange}
            overlayTitle={imagePickerBannerText}
            defaultImage={banner}
            onImageError={onImageError}
            // hasWarning
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
