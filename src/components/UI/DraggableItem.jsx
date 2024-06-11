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

  // Handle mouse enter events
  const handleMouseEnter = () => {
    // Only allow the tooltip to show if the item is not currently being dragged
    if (!isDragging) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    // Always hide tooltip on mouse leave
    setShowTooltip(false);
  };

  // Construct class string for conditional styling
  const additionalClasses = `${border ? "border border-black p-[5px]" : ""} ${
    isDragging ? "opacity-50" : "opacity-100"
  }`;

  return (
    <div
      ref={drag}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center min-w-[45px] w-[45px] h-[45px] cursor-pointer rounded-[6px] ${additionalClasses}`}
    >
      {icon ? (
        <img src={icon} alt={type} className="w-full h-full rounded" />
      ) : (
        <span className="font-bold text-[36px] uppercase">
          {type.charAt(0)}
        </span>
      )}
      {/* {showTooltip &&
        !isDragging && ( // Double check to ensure tooltip is not shown during dragging
          <div className="absolute z-10 w-auto p-2 text-sm text-white bg-black rounded shadow-lg -top-[30px] capitalize">
            {type}
          </div>
        )} */}
    </div>
  );
};

export default DraggableItem;
