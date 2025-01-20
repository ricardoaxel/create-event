import { Tooltip as ReactTooltip, PlacesType } from "react-tooltip";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  id: string;
  content: string;
  place?: PlacesType;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  id,
  content,
  place = "top",
  className = "",
}) => {
  return (
    <ReactTooltip
      id={id}
      place={place}
      className={`${styles.customStyles} ${className}`}
      content={content}
    />
  );
};
