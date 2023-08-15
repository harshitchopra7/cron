// deps
import React, { useState } from "react";

// constants
import { cronExpressionFormat } from "../constants/index";

// internal deps
import Custom from "./Custom";
import CommonButton from "../global/Button";

function Monthly({ startTimeHour, startTimeMinute }) {
  let monthlyCronExpressionFormat = [...cronExpressionFormat];
  monthlyCronExpressionFormat[0] = startTimeMinute;
  monthlyCronExpressionFormat[1] = startTimeHour;
  //  cron expression should run on 1st date of every month
  monthlyCronExpressionFormat[2] = "1";
  monthlyCronExpressionFormat[4] = "?";

  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    monthlyCronExpressionFormat
  );

  const [showCustomCron, setShowCustomCron] = useState(false);

  return (
    <div>
      <CommonButton
        variant="outlined"
        type={showCustomCron ? "secondary" : "primary"}
        onClick={() =>
          showCustomCron ? setShowCustomCron(false) : setShowCustomCron(true)
        }
        buttonText={showCustomCron ? "Back" : "Custom"}
      />
      {showCustomCron ? (
        <Custom />
      ) : (
        <>
          <div>
            <p>Repeat Every Month</p>
          </div>
          <div className="mt-2">
            <p className="font-bold">
              At {startTimeHour}:{startTimeMinute} on day 1 of the month
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Monthly;
