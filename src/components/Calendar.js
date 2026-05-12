"use client";

import * as React from "react";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Asterisk } from "lucide-react";

const Calendar = () => {
  const [value, setValue] = React.useState(dayjs());

  return (
    <>
      <div className="gap-2 flex flex-col w-full">
        <div className="text-sm font-semibold leading-4 flex">
          Date of birth
          <Asterisk className="size-3 text-red-500"></Asterisk>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;
