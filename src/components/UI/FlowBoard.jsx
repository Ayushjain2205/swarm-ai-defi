import { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import AgentNode from "./AgentNode";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1", agent_type: "instagram" },
    type: "agentNode",
  },
  {
    id: "2",
    position: { x: 500, y: 200 },
    data: { label: "2", agent_type: "twitter" },
    type: "agentNode",
  },
  {
    id: "3",
    position: { x: 900, y: 0 },
    data: { label: "2", agent_type: "image" },
    type: "agentNode",
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
  },
  {
    id: "e2-3",
    source: "1",
    target: "3",
    type: "smoothstep",
    //   type:'simplebezier'
  },
];
const nodeTypes = { agentNode: AgentNode };

export default function FlowBoard() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <ReactFlowProvider>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          nodesDraggable
          fitView
        >
          <Background variant="dots" gap={36} size={2} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
