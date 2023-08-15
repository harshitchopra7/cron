// deps
import React, { useState } from "react";

// mui deps
import TextField from "../../TextField";

// constants
import { cronExpressionFormat } from "../constants/index";

function Minutes({ startTimeHour, startTimeMinute }) {
  let minutesCronExpressionFormat = [...cronExpressionFormat];
  minutesCronExpressionFormat[0] = `${startTimeMinute}/1`;
  minutesCronExpressionFormat[1] = startTimeHour;
  minutesCronExpressionFormat[2] = "?";

  const [numberOfMinutes, setNumberOfMinutes] = useState(1);
  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    minutesCronExpressionFormat
  );

  function updateCronExpression(e) {
    if (e.target.value > 0) {
      setNumberOfMinutes(e.target.value);
      minutesCronExpressionFormat[0] = `${startTimeMinute}/${e.target.value}`;
      setGeneratedCronExpression(minutesCronExpressionFormat);
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
            value={numberOfMinutes}
            min={1}
            max={60}
            style={{
              width: "40px",
              margin: "0 8px",
            }}
          />
        </div>

        <p>minute(s)</p>
      </div>
      <div className="mt-2">
        <p>Run every {numberOfMinutes} minute(s)</p>
      </div>
      {/* <div className='mt-2 flex'>
        {generatedCronExpression.map((value) => (
          <p className='ml-2'>{value}</p>
        ))}
      </div> */}
    </div>
  );
}

export default Minutes;
