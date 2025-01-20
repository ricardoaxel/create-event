import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useFormik, FormikContextType } from "formik";
import * as Yup from "yup";

import {
  BasicInformationForm,
  DatesForm,
  DetailsForm,
} from "@components/organisms";
import { PageTemplate } from "@components/templates";
import basicInfoData from "../../data/basicInfoData.json";

type EventType = (typeof basicInfoData.eventTypes)[0];

export interface FormValues {
  basicInformation: {
    isEventEnabled: boolean;
    eventType: EventType;
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
  dates: {
    bookableRangeDates: [Date | null, Date | null];
    eventDates: Array<[Date | null, Date | null]>;
    defaultCheckInOutDates: [Date | null, Date | null];
    taxesAndFees: Array<{
      name: string;
      amount: number;
      type: { id: "fixed" | "percentage"; name: "Fixed" | "Percentage" };
    }>;
  };
}

export const validationSchema = Yup.object({
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
  dates: Yup.object({
    bookableRangeDates: Yup.array()
      .required("Bookable Start & End Dates are required")
      .test("check-null-date", "Bookable Range Dates are required", (dates) => {
        return dates[0] !== null;
      }),
    defaultCheckInOutDates: Yup.array()
      .required("Default Check In Out Dates required")
      .test(
        "check-null-date",
        "Default Check-In & Check-Out Dates are required",
        (dates) => {
          return dates[0] !== null;
        }
      ),
    eventDates: Yup.array().of(
      Yup.array()
        .required("Event Dates are required")
        .test(
          "check-valid-range",
          "Should specify Dates for Check-In & Check-Out",
          (dates) => dates[0] !== null && dates[1] !== null
        )
    ),
    taxesAndFees: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Tax name is required"),
        amount: Yup.number()
          .required("Amount is required")
          .min(0, "Amount must be greater than or equal to 0"),
        type: Yup.object({
          id: Yup.string().required("Type is required"),
          name: Yup.string().required("Type name is required"),
        }),
      })
    ),
  }),
});

const steps: {
  title: string;
  component: React.ComponentType<{ formProps: FormikContextType<FormValues> }>;
  key: keyof FormValues;
}[] = [
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
  const [isSubmitButtonAnimating, setIsSubmitButtonAnimating] = useState(false);

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
      dates: {
        bookableRangeDates: [null, null],
        eventDates: [[null, null]],
        defaultCheckInOutDates: [null, null],
        taxesAndFees: [],
      },
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: isSubmitted,
    validate: () => {
      setIsSubmitted(true);
    },
    onSubmit: (values) => {
      console.log(`Final values: ${JSON.stringify(values, null, 2)}`);
    },
  });

  const handleStepChange = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  const determineStepState = useCallback(
    (stepKey: keyof FormValues): "completed" | "hasIssues" | null => {
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
    },
    [formik.errors, formik.values, isSubmitted]
  );

  const stepsWithState = useMemo(
    () =>
      steps.map((step) => ({
        ...step,
        stepState: determineStepState(step.key),
      })),
    [determineStepState]
  );

  useEffect(() => {
    if (isSubmitButtonAnimating) {
      const timer = setTimeout(() => {
        setIsSubmitButtonAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isSubmitButtonAnimating]);

  const validateFormStatus = () => {
    formik.validateForm().then((errors) => {
      setIsSubmitButtonAnimating(Object.keys(errors).length > 0);
    });
  };

  return (
    <PageTemplate
      currentStep={currentStep}
      onStepChange={handleStepChange}
      steps={stepsWithState}
      formProps={formik}
      triggerButtonAnimation={isSubmitButtonAnimating}
      validateFormStatus={validateFormStatus}
    />
  );
};

export default CreateEventPage;
