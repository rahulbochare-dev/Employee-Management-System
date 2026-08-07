import React from "react";
import * as Icons from "lucide-react";

function DynamicIcon({ name, size = 20, color = "currentColor" }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
}

const InsightCard = ({ title, icon, iconColor, data, cardType }) => {
  const values = {
    value1: null,
    value2: null,
  };
  if (cardType === "payroll") {
    ((values.value1 = `${data.value1 || "N/A"} `),
      (values.value2 = data.value2));
  }
  if (cardType === "employeeCountry") {
    ((values.value1 = `${data.value1 || "N/A"}  - `),
      (values.value2 = `${data.value2 || "N/A"}% `));
  }
  if (cardType === "genderRatioPercent") {
    ((values.value1 = `M - ${data.value1 || "N/A"}% / `),
      (values.value2 = `F - ${data.value2 || "N/A"}%`));
  }
  if (cardType === "averageAge") {
    values.value1 = `${data.value1} - `;
    values.value2 = data.value2 || "N/A";
  }

  return (
    <div className="w-84.25 h-22 bg-white border border-[#eaeaea] rounded-2xl flex items-center">
      <div className="w-full h-[60%] flex items-center pl-5">
        <div
          style={{ backgroundColor: `${iconColor}40` }}
          className={`rounded-full w-13.5 h-13.5 flex justify-center items-center`}>
          <DynamicIcon
            name={icon}
            size={28}
            color={iconColor}/>
        </div>
        <div className="w-[75%] ml-2 h-full flex flex-col justify-evenly">
          <h3 className="text-sm font-medium text-[#9c9c9c]">{title}</h3>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-medium">
            {values.value1}
            <span> {values.value2}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
