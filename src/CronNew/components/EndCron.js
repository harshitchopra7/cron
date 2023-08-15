// deps
import React, { useState } from 'react';

// constants
import { cronExpressionFormat } from '../constants/index';

function EndCron({ endDate, endTime }) {
  let stringifiedEndDate = JSON.stringify(endDate);
  let stringifiedEndTime = JSON.stringify(endTime);

  let endTimeMinute = stringifiedEndTime?.slice(12, 14);
  let endTimeHour = stringifiedEndTime?.slice(14, 16);
  let endNumericalDate = stringifiedEndDate?.slice(9, 11);
  let endMonth = stringifiedEndDate?.slice(6, 8);
  let endYear = stringifiedEndDate?.slice(1, 5);
  let dailyCronExpressFormat = [...cronExpressionFormat];
  dailyCronExpressFormat[0] = endTimeMinute || 0;
  dailyCronExpressFormat[1] = endTimeHour || 12;
  dailyCronExpressFormat[2] = endNumericalDate;
  dailyCronExpressFormat[3] = endMonth;
  dailyCronExpressFormat[4] = '?';
  dailyCronExpressFormat[5] = endYear;

  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    dailyCronExpressFormat
  );

  return (
    <></>
    // <div className='mt-2 flex'>
    //   {generatedCronExpression?.map((value) => (
    //     <p className='ml-2'>{value}</p>
    //   ))}
    // </div>
  );
}

export default EndCron;
