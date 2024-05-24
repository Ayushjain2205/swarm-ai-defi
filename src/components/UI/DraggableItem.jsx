import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "AGENT_BLOCK",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex items-center justify-center w-[45px] h-[45px] cursor-pointer ${
        icon ? "" : "border border-black"
      } rounded`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {icon ? (
        <img src={icon} alt="" className="w-full h-full rounded" />
      ) : (
        <span className="font-bold text-[36px] uppercase">
          {type.charAt(0)}
        </span>
      )}
    </div>
  );
};

export default DraggableItem;
