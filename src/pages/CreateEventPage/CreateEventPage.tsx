import { BasicInformationForm } from "@components/organisms";
import { PageTemplate } from "@components/templates";
import React, { useState } from "react";

const CreateEventPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const onStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <PageTemplate
      title="Basic Information"
      currentStep={currentStep}
      onStepChange={onStepChange}
    >
      <BasicInformationForm />
    </PageTemplate>
  );
};

export default CreateEventPage;
