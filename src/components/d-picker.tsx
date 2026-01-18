import {
  DatePicker,
  DatePickerControl,
  DatePickerInput,
} from "@/components/ui/date-picker";

const DPicker = (props: { name: string; required?: boolean }) => {
  return (
    <DatePicker> 
      <DatePickerControl>
        <DatePickerInput required={props.required} name={props.name} />
      </DatePickerControl>
    </DatePicker>
  );
};

export default DPicker;
