import React from "react";
import Separator from "./Seperator";
import * as Icons from "lucide-react";

function DynamicIcon({ name, size = 20, color = "currentColor" }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
}

const KPICard = ({
  title,
  mainIcon,
  icon2,
  icon3,
  icon2Text,
  icon3Text,
  mainCount,
  icon2Count,
  icon3Count,
}) => {
  return (
    <>
      <div className="w-84 h-41.5 bg-white border border-[#eaeaea] rounded-2xl overflow-clip">
        <div className="w-full h-[6.688rem] rounded-t-2xl flex">
          <div className="w-1/2 h-[6.688rem]">
            <h3 className="text-lg font-medium text-[#9c9c9c] pl-[1.313rem] pt-[0.938rem]">
              {title}
            </h3>
            <h1 className="text-5xl font-medium pl-[1.313rem] pt-1">
              {mainCount ?? "N/A"}
            </h1>
          </div>
          <div className="w-1/2 h-[6.688rem] flex justify-end pr-8 pt-8">
            <DynamicIcon
              name={mainIcon}
              size={62}
              color={"black"} />
          </div>
        </div>
        <Separator width={"w-76"} />
        <div className="w-full h-[3.610rem] rounded-b-2xl overflow-clip flex">
          <div className="w-4/8 h-full flex pl-4 justify-start items-center gap-2">
            <DynamicIcon
              name={icon2}
              size={18}
              color={"Blue"} />
            <h3 className="text-md font-medium border-r border-[#b6b6b6] w-22">
              {icon2Count ?? "N/A"} {icon2Text}
            </h3>
          </div>
          <div className="w-2/3 h-full flex pl-4 justify-start items-center gap-2">
            <DynamicIcon
              name={icon3}
              size={18}
              color={"Purple"} />
            <h3 className="text-md font-medium">
              {icon3Count ?? "N/A"} {icon3Text}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default KPICard;
