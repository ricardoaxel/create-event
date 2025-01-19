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
  isEventEnabled: boolean;
  eventType: any;
  eventName: string;
  banner: string;
  hasOverlayTitle: boolean;
  overlayTitle: string;
}

const validationSchema = Yup.object({
  eventName: Yup.string()
    .min(4, "eventName must be at least 4 characters long")
    .required("eventName is required"),
  // eventOrganizer: Yup.string().required("Event organizer is required"),
  // isEventEnabled: Yup.boolean().required("Event enabled status is required"),
  // eventImage: Yup.string().required("Event image is required"),
  // overlayTitle: Yup.string().required("Overlay title is required"),
});

const steps = [
  { title: "Basic Information", component: BasicInformationForm },
  { title: "Details", component: DetailsForm },
  { title: "Dates", component: DatesForm },
];

const CreateEventPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const formik = useFormik<FormValues>({
    initialValues: {
      isEventEnabled: true,
      eventType: basicInfoData.eventTypes[0],
      eventName: "",
      banner: "",
      hasOverlayTitle: false,
      overlayTitle: "",
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validate: (values) => {
      alert(`Final values: ${JSON.stringify(values, null, 2)}`);
    },
    onSubmit: () => {},
  });

  const handleStepChange = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  return (
    <PageTemplate
      currentStep={currentStep}
      onStepChange={handleStepChange}
      steps={steps}
      formProps={formik}
    />
  );
};

export default CreateEventPage;
