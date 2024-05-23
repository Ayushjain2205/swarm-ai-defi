import React from "react";
import ReactFlow, { ReactFlowProvider, Background } from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function FlowBoard() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Background variant="dots" gap={36} size={2} />
      </ReactFlow>
    </div>
  );
}
