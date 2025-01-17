import {
  BasicInformationForm,
  DatesForm,
  DetailsForm,
} from "@components/organisms";
import { PageTemplate } from "@components/templates";
import React, { useState } from "react";

const CreateEventPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const sectionTitle = "Dates";

  return (
    <PageTemplate
      title={sectionTitle}
      currentStep={currentStep}
      onStepChange={setCurrentStep}
    >
      {/* <BasicInformationForm /> */}
      {/* <DetailsForm /> */}
      <DatesForm />
    </PageTemplate>
  );
};

export default CreateEventPage;
