import React from "react";
import { Handle, Position } from "reactflow";

const AgentNode = ({ data }) => {
  return (
    <>
      <div className="relative w-[290px] h-[148px] bg-white rounded-[10px] border-[2px] border-[#EBEBEB] px-[12px] py-[20px]">
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
          style={{
            background: "transparent",
            border: "transparent",
            marginRight: "-5px",
          }}
          isConnectable={false}
        />
      </div>
      <div
        className="absolute w-[20px] h-[20px] flex items-center justify-center rounded-full bg-black"
        style={{ top: "50%", right: "-10px", transform: "translateY(-50%)" }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default AgentNode;
