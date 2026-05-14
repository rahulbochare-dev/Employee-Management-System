import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-purple-600 animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 rounded-full bg-purple-600 animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 rounded-full bg-purple-600 animate-bounce"></span>
      </div>
    </div>
  );
};

export default Loading