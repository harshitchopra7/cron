// deps
import React, { useState } from "react";

// mui deps
import TextField from "../../TextField";

// constants
import { cronExpressionFormat } from "../constants/index";

function Hourly({ startTimeHour, startTimeMinute }) {
  let hourlyCronExpressionFormat = [...cronExpressionFormat];
  hourlyCronExpressionFormat[0] = startTimeMinute;
  hourlyCronExpressionFormat[1] = `${startTimeHour}/1`;
  hourlyCronExpressionFormat[2] = "?";

  const [numberOfHours, setNumberOfHours] = useState(1);
  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    hourlyCronExpressionFormat
  );

  function updateCronExpression(e) {
    if (e.target.value > 0) {
      setNumberOfHours(e.target.value);
      hourlyCronExpressionFormat[1] = `${startTimeHour}/${e.target.value}`;
      setGeneratedCronExpression(hourlyCronExpressionFormat);
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
            value={numberOfHours}
            min={1}
            max={24}
            style={{
              width: "40px",
              margin: "0 8px",
            }}
          />
        </div>

        <p>hour(s)</p>
      </div>
      <div className="mt-2">
        <p>Run every {numberOfHours} hour(s)</p>
      </div>
      {/* <div className='mt-2 flex'>
        {generatedCronExpression?.map((value) => (
          <p className='ml-2'>{value}</p>
        ))}
      </div> */}
    </div>
  );
}

export default Hourly;
