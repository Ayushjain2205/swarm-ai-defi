import React from "react";

const AgentBlock = ({ children, icon, label, label_color }) => {
  return (
    <div className="flex flex-col">
      {icon && <img src={icon} className="size-[30px] rounded" alt="" />}
      {label && label}
      <div className="mt-[20px]">{children}</div>
    </div>
  );
};

export default AgentBlock;
