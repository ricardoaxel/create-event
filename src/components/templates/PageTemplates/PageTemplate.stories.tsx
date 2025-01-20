import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { PageTemplate } from "@components/templates";
import { Formik, FormikProps } from "formik";
import {
  FormValues,
  validationSchema,
} from "../../../pages/CreateEventPage/CreateEventPage";
import {
  BasicInformationForm,
  DatesForm,
  DetailsForm,
} from "@components/organisms";

const steps: {
  title: string;
  component: React.ComponentType<{ formProps: FormikProps<FormValues> }>;
  key: keyof FormValues;
  stepState: "completed" | "hasIssues" | null;
}[] = [
  {
    title: "Basic Information",
    component: BasicInformationForm,
    key: "basicInformation",
    stepState: null,
  },
  {
    title: "Details",
    component: DetailsForm,
    key: "details",
    stepState: null,
  },
  {
    title: "Dates",
    component: DatesForm,
    key: "dates",
    stepState: null,
  },
];

// Dummy form values
const formValues: FormValues = {
  basicInformation: {
    isEventEnabled: true,
    eventType: { id: 1, name: "Public Event" },
    eventName: "Sample Event",
    banner: "sample-banner-url",
    hasOverlayTitle: false,
    overlayTitle: "",
  },
  details: {
    subdomain: "sample-event",
    eventAddress: "123 Sample St.",
    featuredHotelsTitle: "Featured Hotels",
    venueName: "Sample Venue",
    minimumNights: 2,
  },
  dates: {
    bookableRangeDates: [new Date("2025-05-01"), new Date("2025-06-01")],
    eventDates: [[new Date("2025-05-10"), new Date("2025-05-12")]],
    defaultCheckInOutDates: [new Date("2025-05-10"), new Date("2025-05-12")],
    taxesAndFees: [
      { name: "Tax", amount: 5, type: { id: "fixed", name: "Fixed" } },
    ],
  },
};

const Template: StoryFn = (args) => {
  const [currentStep, setCurrentStep] = useState(0);

  const onStepChange = (step: number) => {
    setCurrentStep(step);
    console.log("Changed to step:", step);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(formikProps) => (
        <PageTemplate
          currentStep={currentStep}
          onStepChange={onStepChange}
          steps={steps}
          formProps={formikProps}
          validateFormStatus={() => console.log("Validate form")}
          {...args}
        />
      )}
    </Formik>
  );
};

export default {
  title: "Templates/PageTemplate",
  component: PageTemplate,
} as Meta;

export const Default = Template.bind({});
Default.args = {
  steps: steps,
  validateFormStatus: () => console.log("Validate form"),
};
