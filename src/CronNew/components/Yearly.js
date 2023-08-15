// deps
import React, { useState } from "react";

// mui deps
import TextField from "../../TextField";

// constants
import { cronExpressionFormat } from "../constants/index";

function Yearly({ startTimeHour, startTimeMinute }) {
  const date = new Date();
  let currentYear = date.getFullYear();

  let yearlyCronExpressionFormat = [...cronExpressionFormat];

  yearlyCronExpressionFormat[0] = startTimeMinute;
  yearlyCronExpressionFormat[1] = startTimeHour;
  //  cron expression should run on 1st date
  yearlyCronExpressionFormat[2] = `1`;
  //  cron expression should run on 1st month
  yearlyCronExpressionFormat[3] = `1`;
  //   line 22 and 23 combined -> cron expression should run on 1st date of 1st month every year
  yearlyCronExpressionFormat[4] = `?`;
  //  cron expression should run every year starting from {currentYear}
  yearlyCronExpressionFormat[5] = `${currentYear}/1`;

  const [numberOfYears, setNumberOfYears] = useState(1);
  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    yearlyCronExpressionFormat
  );

  function updateCronExpression(e) {
    if (e.target.value > 0) {
      setNumberOfYears(e.target.value);
      yearlyCronExpressionFormat[5] = `${currentYear}/${e.target.value}`;
      setGeneratedCronExpression(yearlyCronExpressionFormat);
    }
  }

  return (
    <div>
      <div className="flex items-center">
        <p>Every</p>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            type="Number"
            onChange={(e) => updateCronExpression(e)}
            value={numberOfYears}
            min={1}
            max={24}
            style={{
              width: "40px",
              margin: "0 8px",
            }}
          />
        </div>

        <p>year(s)</p>
      </div>
      <div className="mt-2">
        <p>Run every {numberOfYears} year(s)</p>
      </div>
    </div>
  );
}

export default Yearly;
