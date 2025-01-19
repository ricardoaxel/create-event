import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  BasicInformationForm,
  DatesForm,
  DetailsForm,
} from "@components/organisms";
import { PageTemplate } from "@components/templates";
import basicInfoData from "../../data/basicInfoData.json";

export interface FormValues {
  basicInformation: {
    isEventEnabled: boolean;
    eventType: any;
    eventName: string;
    banner: string;
    hasOverlayTitle: boolean;
    overlayTitle: string;
  };
  details: {
    subdomain: string;
    eventAddress: string;
    featuredHotelsTitle: string;
    venueName: string;
    minimumNights: number;
  };
}

const validationSchema = Yup.object({
  basicInformation: Yup.object({
    eventName: Yup.string().required("Event Name is required"),
    banner: Yup.string().required("Banner is required"),
    overlayTitle: Yup.string().when("hasOverlayTitle", {
      is: true,
      then: (schema) => schema.required("Overlay Title is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  }),
  details: Yup.object({
    subdomain: Yup.string()
      .matches(
        /^[a-zA-Z0-9-]+$/,
        "Subdomain can only contain letters, numbers, and dashes"
      )
      .required("Subdomain is required"),
    eventAddress: Yup.string().required("Event Address is required"),
    featuredHotelsTitle: Yup.string().required(
      "Featured Hotels Title is required"
    ),
    venueName: Yup.string().required("Venue Name is required"),
  }),
});

const steps = [
  {
    title: "Basic Information",
    component: BasicInformationForm,
    key: "basicInformation",
  },
  { title: "Details", component: DetailsForm, key: "details" },
  { title: "Dates", component: DatesForm, key: "dates" },
];

const CreateEventPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      basicInformation: {
        isEventEnabled: true,
        eventType: basicInfoData.eventTypes[0],
        eventName: "",
        banner: "",
        hasOverlayTitle: false,
        overlayTitle: "",
      },
      details: {
        subdomain: "",
        eventAddress: "",
        featuredHotelsTitle: "Featured hotels",
        venueName: "",
        minimumNights: 0,
      },
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: isSubmitted,
    validate: () => {
      setIsSubmitted(true);
    },
    onSubmit: (values) => {
      setIsSubmitted(true);
      alert(`Final values: ${JSON.stringify(values, null, 2)}`);
    },
  });

  const handleStepChange = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  const determineStepState = (
    stepKey: keyof FormValues
  ): "completed" | "hasIssues" | null => {
    if (!isSubmitted) {
      return null;
    }

    const stepErrors = formik.errors[stepKey];
    const stepValues = formik.values[stepKey];
    const schema = validationSchema.fields[stepKey] as Yup.ObjectSchema<any>;

    if (stepErrors && Object.keys(stepErrors).length > 0) {
      return "hasIssues";
    }

    try {
      schema.validateSync(stepValues, { abortEarly: false });
      return "completed";
    } catch {
      return "hasIssues";
    }
  };

  const stepsWithState = steps.map((step) => ({
    ...step,
    stepState: determineStepState(step.key as keyof FormValues),
  }));

  return (
    <PageTemplate
      currentStep={currentStep}
      onStepChange={handleStepChange}
      steps={stepsWithState}
      formProps={formik}
    />
  );
};

export default CreateEventPage;
