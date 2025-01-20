import { CircleText } from "@components/atoms";
import { toast as hotToast } from "react-hot-toast";

export const toast = (
  text: string,
  type: "warning" | "success" = "warning"
) => {
  const typeClasses =
    type === "success"
      ? "bg-success/10 border-success"
      : "bg-warning/10 border-warning";

  hotToast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } ${typeClasses} border p-4 rounded-lg shadow-lg flex items-left gap-10`}
    >
      <CircleText type={type} />
      <span>{text}</span>
    </div>
  ));
};
