import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import * as Icons from "lucide-react";

function DynamicIcon({ name, size = 20, color = "currentColor" }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
}

const SidebarButton = ({ name, icon, to }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname.includes(to);

  return (
    <div
      onClick={() => navigate(to)}
      className={`w-63.5 h-10 rounded-lg flex items-center justify-center mb-5 cursor-pointer transition-all duration-200 
      ${isActive ? "bg-black" : "hover:bg-gray-100"}`}>
      <div className="w-56 h-6 flex gap-3">
        {icon && (
          <DynamicIcon
            name={icon}
            size={18}
            color={isActive ? "white" : "black"}/>
        )}
        <h3 className={`font-medium ${isActive ? "text-white" : "text-black"}`}>
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SidebarButton;
