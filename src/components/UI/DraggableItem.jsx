import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, children }) => {
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
      className="size-[45px] border border-black rounded"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
