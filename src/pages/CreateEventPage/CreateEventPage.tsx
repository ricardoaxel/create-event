import React, { useState, useCallback } from "react";
import {
  BasicInformationForm,
  DatesForm,
  DetailsForm,
} from "@components/organisms";
import { PageTemplate } from "@components/templates";

const steps = [
  { title: "Basic Information", component: BasicInformationForm },
  { title: "Details", component: DetailsForm },
  { title: "Dates", component: DatesForm },
];

const CreateEventPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  return (
    <PageTemplate
      currentStep={currentStep}
      onStepChange={handleStepChange}
      steps={steps}
    />
  );
};

export default CreateEventPage;
