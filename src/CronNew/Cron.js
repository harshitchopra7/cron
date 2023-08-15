// deps
import React, { useState } from "react";

// mui deps
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// internal deps
import DropdownSelect from "./global/DropdownSelect";

// internal repeat when cron components
import Minutes from "./components/Minutes";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import Weekly from "./components/Weekly";
import Yearly from "./components/Yearly";

const repeatWhenDropDownData = [
  "Minutes",
  "Hourly",
  "Daily",
  "Weekly",
  "Monthly",
  "Yearly",
];

function Cron({ startTime }) {
  const [repeatWhen, setRepeatWhen] = useState(repeatWhenDropDownData[0]);

  function trimTime(time) {
    // time converted from GMT to IST
    const timeConvertedToIST = new Date(time).toLocaleString(undefined, {
      timeZone: "Asia/Kolkata",
    });
    return {
      hour: timeConvertedToIST?.slice(12, 14),
      minute: timeConvertedToIST?.slice(15, 17),
    };
  }

  function renderRepeatWhenComponent() {
    switch (repeatWhen) {
      case repeatWhenDropDownData[0]:
        return (
          <Minutes
            startTimeHour={trimTime(startTime).hour}
            startTimeMinute={trimTime(startTime).minute}
          />
        );
      case repeatWhenDropDownData[1]:
        return (
          <Hourly
            startTimeHour={trimTime(startTime).hour}
            startTimeMinute={trimTime(startTime).minute}
          />
        );
      case repeatWhenDropDownData[2]:
        return (
          <Daily
            startTimeHour={trimTime(startTime).hour}
            startTimeMinute={trimTime(startTime).minute}
          />
        );
      case repeatWhenDropDownData[3]:
        return (
          <Weekly
            startTimeHour={trimTime(startTime).hour}
            startTimeMinute={trimTime(startTime).minute}
          />
        );
      case repeatWhenDropDownData[4]:
        return (
          <Monthly
            startTimeHour={trimTime(startTime).hour}
            startTimeMinute={trimTime(startTime).minute}
          />
        );
      case repeatWhenDropDownData[5]:
        return (
          <Yearly
            startTimeHour={trimTime(startTime).hour}
            startTimeMinute={trimTime(startTime).minute}
          />
        );
      default:
        return;
    }
  }

  return (
    <div style={{ marginLeft: "10px" }}>
      <>
        <div className="mb-2" style={{ marginTop: "4px" }}>
          <DropdownSelect
            label="Repeat"
            value={repeatWhen}
            menuItem={repeatWhenDropDownData.map((item) => item)}
            handleChange={(e) => setRepeatWhen(e.target.value)}
          />
        </div>
        <div className="mt-2">{renderRepeatWhenComponent()}</div>
      </>
    </div>
  );
}

export default Cron;
