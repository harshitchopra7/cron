import React, { useState } from "react";

// mui deps
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// internal deps
import DropdownSelect from "../global/DropdownSelect";
import MultipleChekboxSelect from "../global/MultipleChekboxSelect";

// constant imports
import { cronExpressionFormat } from "../constants/index";

// constants
const dateList = [...Array(31).keys()];
const onWhichWeekDay = ["First", "Second", "Third", "Fourth", "Fifth"];
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Custom() {
  let minutesCronExpressionFormat = [...cronExpressionFormat];
  minutesCronExpressionFormat[0] = "0";
  minutesCronExpressionFormat[1] = "12";
  minutesCronExpressionFormat[4] = "?";

  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    minutesCronExpressionFormat
  );
  const [numericOrAlphabeticDataSelected, setNumericOrAlphabeticDataSelected] =
    useState("numericData");

  const [numericDatesSelected, setNumericDatesSelected] = useState([]);
  const [alphabeticDatesSelected, setAlphabeticDatesSelected] = useState([]);
  const [alphabeticDateSelected, setAlphabeticDateSelected] = useState(
    onWhichWeekDay[0]
  );

  const [weekDaysList, setWeekDaysList] = useState(weekdays);
  const [weekDaySelected, setWeekDaySelected] = useState(weekdays[0]);

  function addSelectedDatesInCronExpression() {
    if (numericOrAlphabeticDataSelected === "numericData") {
      let copyData = [...generatedCronExpression];
      copyData[2] = numericDatesSelected.join(",");

      setGeneratedCronExpression([...copyData]);
    } else {
      let copyData = [...generatedCronExpression];
      copyData[2] = alphabeticDatesSelected.join(",");

      setGeneratedCronExpression([...copyData]);
    }
  }

  function onNumericDateSelect(date) {
    if (numericDatesSelected.includes(date)) {
      const copyData = [...numericDatesSelected];
      const index = copyData.indexOf(date);
      copyData.splice(index, 1);
      setNumericDatesSelected(copyData);
      addSelectedDatesInCronExpression();
      return;
    }
    const copyData = [...numericDatesSelected];
    copyData.push(date);
    setNumericDatesSelected(copyData);
    addSelectedDatesInCronExpression();
  }

  function alphabeticNumberToNumericNumber(alphabeticDateSelected) {
    switch (alphabeticDateSelected) {
      case onWhichWeekDay[0]:
        return 1;
      case onWhichWeekDay[1]:
        return 2;
      case onWhichWeekDay[2]:
        return 3;
      case onWhichWeekDay[3]:
        return 4;
      case onWhichWeekDay[4]:
        return 5;
      default:
        return;
    }
  }

  function onAlphabeticDateSelect(e, value) {
    if (value === "alphabeticDateSelect") {
      const aplhabeticDate = e.target.value;
      setAlphabeticDateSelected(aplhabeticDate);
      let copyData = [...generatedCronExpression];
      const numericDay = alphabeticNumberToNumericNumber(aplhabeticDate);
      copyData[4] = `${weekDaySelected.slice(0, 3)}#${numericDay}`;

      setGeneratedCronExpression([...copyData]);
    } else if (value === "weekDaySelect") {
      const weekDay = e.target.value;
      setWeekDaySelected(weekDay);
      let copyData = [...generatedCronExpression];

      copyData[4] = `${weekDay.slice(0, 3)}#${alphabeticDateSelected}`;

      setGeneratedCronExpression([...copyData]);
    }
  }

  function onNumericOrAlphabeticDataSelect(value) {
    setNumericOrAlphabeticDataSelected(value);
    if (value === "numericData") {
      let copyData = [...generatedCronExpression];
      copyData[2] = alphabeticDatesSelected.join(",");
      copyData[4] = "?";

      setGeneratedCronExpression([...copyData]);
    } else {
      let copyData = [...generatedCronExpression];
      copyData[2] = "?";
      copyData[4] = `MON#1`;

      setGeneratedCronExpression([...copyData]);
    }
  }

  return (
    <div>
      {/* Run on which day of every month */}
      <div className="flex justify-between">
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="numericData"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="numericData"
                control={<Radio />}
                label={<p>Run on day</p>}
                onChange={() => onNumericOrAlphabeticDataSelect("numericData")}
              />
              <FormControlLabel
                value="alphabeticData"
                control={<Radio />}
                label={<p>Run on the</p>}
                onChange={() =>
                  onNumericOrAlphabeticDataSelect("alphabeticData")
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          {/* MultiSelect  */}
          {numericOrAlphabeticDataSelected === "numericData" ? (
            <div className="flex items-center">
              <MultipleChekboxSelect
                label="Select"
                value={dateList}
                menuItem={dateList.map((value) => value + 1)}
                style={{ width: "40%", marginRight: "10px" }}
                handleCheckboxChange={onNumericDateSelect}
                selectedList={numericDatesSelected}
              />
              <p style={{ textAlign: "right" }}>of the month</p>
            </div>
          ) : (
            <div>
              <div>
                <DropdownSelect
                  value={alphabeticDateSelected}
                  menuItem={onWhichWeekDay.map((value) => value)}
                  style={{ marginRight: "10px" }}
                  handleChange={(e) =>
                    onAlphabeticDateSelect(e, "alphabeticDateSelect")
                  }
                  width="40%"
                />
              </div>
              <div className="flex items-center" style={{ marginTop: "10px" }}>
                <DropdownSelect
                  value={weekDaySelected}
                  menuItem={weekDaysList.map((value) => value)}
                  style={{ marginRight: "10px" }}
                  handleChange={(e) =>
                    onAlphabeticDateSelect(e, "weekDaySelect")
                  }
                  width="40%"
                />
                <p>of the month</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className='mt-2 flex'>
        {generatedCronExpression.map((value) => (
          <p className='ml-2'>{value}</p>
        ))}
      </div> */}
    </div>
  );
}

export default Custom;
