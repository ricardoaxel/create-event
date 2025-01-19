import { CircleText } from "@components/atoms";
import { toast as hotToast } from "react-hot-toast";

export const toast = (text: string) => {
  hotToast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      }  bg-warning/10 border-warning border p-4 rounded-lg shadow-lg flex items-left gap-10`}
    >
      <CircleText type="warning" />
      <span>{text}</span>
    </div>
  ));
};
