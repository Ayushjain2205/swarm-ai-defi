import React, { useState } from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, icon, border }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "AGENT_BLOCK",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [showTooltip, setShowTooltip] = useState(false);

  // Determine additional classes for border and opacity
  const additionalClasses = `${border ? "border border-black p-[5px]" : ""} ${
    isDragging ? "opacity-50" : "opacity-100"
  }`;

  return (
    <div
      ref={drag}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className={`relative flex items-center justify-center min-w-[45px] w-[45px] h-[45px] cursor-pointer rounded-[6px] ${additionalClasses}`}
    >
      {icon ? (
        <img src={icon} alt={type} className="w-full h-full rounded" />
      ) : (
        <span className="font-bold text-[36px] uppercase">
          {type.charAt(0)}
        </span>
      )}
      {showTooltip && (
        <div className="absolute z-10 w-auto p-2 text-sm text-white bg-black rounded shadow-lg -top-[30px] capitalize ">
          {type}
        </div>
      )}
    </div>
  );
};

export default DraggableItem;
