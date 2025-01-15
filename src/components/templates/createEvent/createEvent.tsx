import { useState } from "react";

import { ToggleButton } from "@components/molecules";
import { StepNavigator } from "@components/organisms";
import { Button } from "@components/atoms";

function CreateEvent() {
  const [isEventEnabled, setIsEventEnabled] = useState<boolean>(false); // Specify the type here

  return (
    <div className="flex-1 flex">
      <StepNavigator
        steps={["1", "2", "3"]}
        currentStep={2}
        onStepChange={() => console.log("hasd")}
      />
      <div className="p-5 flex-1">
        <h2 className="font-semibold text-2xl">Basic Information</h2>
        <div className="p-5 border-selected bg-primary rounded-[8px] border flex-1">
          <p>Hola</p>
          <ToggleButton
            leftText="Enable Event"
            rightText="Disable Event"
            handleToggle={setIsEventEnabled}
            leftSideActive={isEventEnabled}
          />

          <Button
            label="Disable Event"
            width="151px"
            height="40px"
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
