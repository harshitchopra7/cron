// deps
import React, { useState } from 'react';

// constants
import { cronExpressionFormat } from '../constants/index';

function Daily({ startTimeHour }) {
  let dailyCronExpressFormat = [...cronExpressionFormat];
  dailyCronExpressFormat[0] = '0';
  dailyCronExpressFormat[1] = startTimeHour;
  dailyCronExpressFormat[4] = '?';

  const [generatedCronExpression, setGeneratedCronExpression] = useState(
    dailyCronExpressFormat
  );

  return (
    <div>
      <div>
        <div>
          <p>Repeat Daily</p>
        </div>
        <div className='mt-2'>
          <p className='font-bold'>At {startTimeHour} everyday</p>
        </div>
        {/* <div className='mt-2 flex'>
          {generatedCronExpression?.map((value) => (
            <p className='ml-2'>{value}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Daily;
