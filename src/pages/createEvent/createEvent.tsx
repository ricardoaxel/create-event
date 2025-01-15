import { StepNavigator } from "@components/organisms";

function CreateEvent() {
  return (
    <div className=" flex-1">
      <StepNavigator
        steps={["1", "2", "3"]}
        currentStep={2}
        onStepChange={() => console.log("hasd")}
      />
    </div>
  );
}

export default CreateEvent;
