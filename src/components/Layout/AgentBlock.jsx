import React from "react";

const AgentBlock = ({ children, icon, label, label_color }) => {
  return (
    <div className="flex flex-col">
      {icon && <img src={icon} className="size-[30px] rounded" alt="" />}
      {label && (
        <div
          className="h-[30px] w-[105px] flex items-center justify-center font-[500] text-white rounded-[8px]"
          style={{ backgroundColor: label_color }}
        >
          {label}
        </div>
      )}
      <div className="mt-[35px] flex flex-col gap-[12px]">{children}</div>
    </div>
  );
};

export default AgentBlock;
