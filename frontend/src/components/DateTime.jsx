import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const DateTime = () => {
  const [date, setDate] = useState(
    dayjs().format(`ddd, MMM DD YYYY, hh:mm:ss A`)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs().format(`ddd, MMM DD YYYY, hh:mm:ss A`));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-fit h-fit">
      <h2 className="text-[2.5rem] font-light text-black tabular-nums">
        {date}
      </h2>
    </div>
  );
};

export default DateTime;
