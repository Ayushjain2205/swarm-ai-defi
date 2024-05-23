import React from "react";
import { Handle, Position } from "reactflow";

const AgentNode = ({ data }) => {
  return (
    <div className="w-[290px] h-[148px] bg-white rounded-[10px] border border-[#EBEBEB]">
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
      />
      <div>
        <strong>{data.label}</strong>
        <h1>Helo</h1>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default AgentNode;
