import { Formik, useFormik } from "formik";
import { BasicInformationForm } from "./BasicInformationForm";
import { StoryFn, Meta } from "@storybook/react";
import { FormValues } from "src/pages/CreateEventPage/CreateEventPage";
import basicInfoData from "../../../data/basicInfoData.json";

export default {
  title: "Organisms/BasicInformationForm",
  component: BasicInformationForm,
} as Meta;

const Template: StoryFn = (args) => {
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
        taxesAndFees: [
          { name: "", amount: 1, type: { id: "fixed", name: "Fixed" } },
        ],
      },
    },
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(`Final values: ${JSON.stringify(values, null, 2)}`);
    },
  });

  const initialValues = {
    basicInformation: {
      isEventEnabled: false,
      eventType: { label: "Conference", value: "conference" },
      eventName: "",
      banner: "",
      hasOverlayTitle: false,
      overlayTitle: "",
    },
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnBlur
    >
      {() => <BasicInformationForm {...args} formProps={formik} />}
    </Formik>
  );
};

export const Default = Template.bind({});
Default.args = {};
