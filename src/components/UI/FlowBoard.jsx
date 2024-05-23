import React from "react";
import ReactFlow, { ReactFlowProvider, Background } from "reactflow";
import AgentNode from "./AgentNode";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "agentNode",
  },
  {
    id: "2",
    position: { x: 0, y: 400 },
    data: { label: "2" },
    type: "agentNode",
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
const nodeTypes = { agentNode: AgentNode };

export default function FlowBoard() {
  return (
    <ReactFlowProvider>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={36} size={2} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
