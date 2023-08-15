import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cron from "./CronNew/Cron";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "./TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function App() {
  const currentDateAndTime2 = new Date();

  const [startDate, setStartDate] = useState(currentDateAndTime2);
  const [startTime, setStartTime] = useState();
  const [endDate, setEndDate] = useState(currentDateAndTime2);
  const [endTime, setEndTime] = useState();
  const [newRows, setNewRows] = useState([]);
  const [scheduledJobsRows, setScheduledJobsRows] = useState([]);
  const [scheduleType, setScheduleType] = useState("Streaming");

  const handleDateTimeChange = (newValue, setData) => {
    switch (setData) {
      case setStartDate:
        setStartDate(newValue);
        break;
      case setStartTime:
        setStartTime(newValue);
        break;
      case setEndDate:
        setEndDate(newValue);
        break;
      case setEndTime:
        setEndTime(newValue);
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <div style={{ flex: "0.45" }}>
        <DesktopDatePicker
          label="End Date"
          inputFormat="MM/dd/yyyy"
          value={endDate}
          onChange={(newValue) => handleDateTimeChange(newValue, setEndDate)}
          renderInput={(params) => <TextField {...params} />}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ flex: "0.45" }}>
        <TimePicker
          label="End Time"
          value={endTime}
          onChange={(newValue) => handleDateTimeChange(newValue, setEndTime)}
          renderInput={(params) => <TextField {...params} />}
          style={{
            width: "100%",
            margin: "10px 0",
          }}
        />
      </div>
      <Cron endDate={endDate} endTime={endTime} />
    </div>
  );
}

export default App;
