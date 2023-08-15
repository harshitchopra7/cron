import React, { useState } from "react";

// mui deps
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// internal deps

// constant imports
import { cronExpressionFormat } from "../constants/index";

// styles
import "./styles.css";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Weekly({ startTime }) {
  let minutesCronExpressionFormat = [...cronExpressionFormat];
  // minutes should come here from props
  minutesCronExpressionFormat[0] = "0";
  // hours should come here from props
  minutesCronExpressionFormat[1] = "12";
  minutesCronExpressionFormat[2] = "?";
  // 4

  const [selectedWeekDays, setSelectedWeekDays] = useState([]);
  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    minutesCronExpressionFormat
  );

  function generateCronExpression() {
    let copyData = [...generatedCronExpression];
    copyData[4] = selectedWeekDays.join(",");
    setGeneratedCronExpression(copyData);
  }

  function addToSelectedList(day) {
    if (selectedWeekDays.includes(day)) {
      let copyData = [...selectedWeekDays];
      const index = copyData.indexOf(day);
      copyData.splice(index, 1);
      setSelectedWeekDays(copyData);
      generateCronExpression();
      return;
    }
    let copyData = [...selectedWeekDays];
    copyData.push(day);
    setSelectedWeekDays(copyData);
    generateCronExpression();
  }

  return (
    <div className="container-fluid">
      <div className="well well-small row">
        <div className="span6 col-sm-6">
          <div className="text_align_left">
            <div className="calendarDaysList">
              {/* class = calendarDaysList_element */}
              {weekdays.map((value) => (
                <p
                  className={
                    selectedWeekDays.includes(value) && "selectedCalendarDay"
                  }
                  onClick={() => addToSelectedList(value)}
                >
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mt-2 flex'>
        {generatedCronExpression?.map((value) => (
          <p className='ml-2'>{value}</p>
        ))}
      </div> */}
    </div>
  );
}

export default Weekly;
