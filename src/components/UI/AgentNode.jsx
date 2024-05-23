import React from "react";
import { Handle, Position } from "reactflow";

const AgentNode = ({ data }) => {
  return (
    <>
      <div className="w-[290px] h-[148px] bg-white rounded-[10px] border-[2px] border-[#EBEBEB] px-[12px] py-[20px]">
        <div>
          <strong>{data.label}</strong>
          <h1>Helo</h1>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          style={{ background: "#555" }}
        />
        <Handle
          type="target"
          position={Position.Left}
          style={{ background: "#555" }}
        />
      </div>
    </>
  );
};

export default AgentNode;
