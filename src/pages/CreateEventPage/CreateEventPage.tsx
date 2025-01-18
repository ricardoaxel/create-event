import React, { useState, useCallback } from "react";
import {
  BasicInformationForm,
  DatesForm,
  DetailsForm,
} from "@components/organisms";
import { PageTemplate } from "@components/templates";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface FormValues {
  eventName: string;
}

const validationSchema = Yup.object({
  eventName: Yup.string()
    .min(4, "eventName must be at least 4 characters long")
    .required("eventName is required"),
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
      eventName: "asdadsa",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
