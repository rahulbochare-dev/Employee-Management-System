import React from "react";
import * as Icons from "lucide-react";

function DynamicIcon({ name, size = 20, color = "currentColor" }) {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} />;
}

const Button = ({
  title,
  icon,
  marginY,
  width = "w-63.5",
  onClick,
  secondary = false,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${width} h-10 rounded-lg flex items-center justify-center gap-3 ${marginY} cursor-pointer transition-all duration-200 ${
        secondary
          ? "bg-white border border-[#eaeaea] hover:bg-gray-200 active:bg-gray-300"
          : "bg-black hover:bg-gray-800 active:bg-gray-900"
      }`}>
      {icon && (
    <DynamicIcon
      name={icon}
      size={18}
      color={secondary ? "black" : "white"}
    />
  )}
      <h3
        className={`text-sm sm:text-base font-medium truncate ${secondary ? "text-black" : "text-white"}`}>
        {title}
      </h3>
    </button>
  );
};

export default Button;
