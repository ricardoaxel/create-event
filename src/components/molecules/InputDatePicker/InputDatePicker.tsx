import DateRangePicker from "@wojtekmaj/react-daterange-picker";

// Base styling for DatePicker of the library
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

// Custom styling based on css-variables of the theme
import "./Inputdatepicker.css";

import { calendar } from "@assets";

type InputDatePickerProps = {
  value: Value;
  onChange: (value: Value) => void;
  minDate?: Date;
  maxDate?: Date;
  inputContainerClasses?: string;
  disabled?: boolean;
};

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const InputDatePicker: React.FC<InputDatePickerProps> = ({
  value,
  onChange,
  minDate = new Date(2025, 0, 1),
  maxDate = new Date(2025, 1, 31),
  inputContainerClasses,
  disabled,
}) => {
  return (
    <DateRangePicker
      className={`${inputContainerClasses} `}
      onChange={onChange}
      value={value}
      minDate={minDate}
      maxDate={maxDate}
      clearIcon={null}
      disabled={disabled}
      calendarIcon={<img src={calendar} />}
    />
  );
};
