import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";

const Calender = () => {
  const date = new Date();

  return (
    <div id="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          defaultValue={dayjs(
            `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
