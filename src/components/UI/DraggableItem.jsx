import React, { useState } from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "AGENT_BLOCK",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      ref={drag}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className={`relative flex items-center justify-center min-w-[45px] w-[45px] h-[45px] cursor-pointer ${
        icon ? "" : "border border-black"
      } rounded ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {icon ? (
        <img src={icon} alt={type} className="w-full h-full rounded" />
      ) : (
        <span className="font-bold text-[36px] uppercase">
          {type.charAt(0)}
        </span>
      )}
      {showTooltip && (
        <div className="absolute z-10 w-auto p-2 text-sm text-white bg-black rounded shadow-lg -top-[30px] capitalize">
          {type}
        </div>
      )}
    </div>
  );
};

export default DraggableItem;
