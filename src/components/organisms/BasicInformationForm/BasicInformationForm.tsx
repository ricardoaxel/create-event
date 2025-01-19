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

  const handleFieldChange = useCallback(
    (field: string, value: any) => {
      formProps.setFieldValue(field, value);
    },
    [formProps]
  );

  const onImageError = (errorMsg: string) => toast(errorMsg);

  const imagePickerBannerText = hasOverlayTitle ? overlayTitle : "";

  return (
    <FormTemplate>
      <ToggleButton
        leftText="Enable Event"
        rightText="Disable Event"
        handleToggle={(value: boolean) =>
          handleFieldChange("basicInformation.isEventEnabled", value)
        }
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
              onChange={(selected: SelectorOption) =>
                handleFieldChange("basicInformation.eventType", selected)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFieldChange("basicInformation.eventName", e.target.value)
              }
              onBlur={formProps.handleBlur("basicInformation.eventName")}
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
            onImageUpload={(image: string) =>
              handleFieldChange("basicInformation.banner", image)
            }
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
        onChange={(value: boolean) =>
          handleFieldChange("basicInformation.hasOverlayTitle", value)
        }
        label="Overlay Title on Banner"
      />
      {hasOverlayTitle && (
        <FormFieldContainer
          label="Overlay Title"
          warningMessage={overlayTitleError}
          renderInput={(inputProps) => (
            <InputText
              value={overlayTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFieldChange(
                  "basicInformation.overlayTitle",
                  e.target.value
                )
              }
              {...inputProps}
            />
          )}
        />
      )}
    </FormTemplate>
  );
};
