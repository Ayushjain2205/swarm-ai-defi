import { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
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
    data: { label: "3", agent_type: "image" },
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

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "AGENT_BLOCK",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const position = offsetToRFPosition(offset);
      const newNode = {
        id: `${nodes.length + 1}`,
        position,
        data: { label: `${nodes.length + 1}`, agent_type: item.type },
        type: "agentNode",
      };
      setNodes((nds) => nds.concat(newNode));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const offsetToRFPosition = (offset) => {
    const rect = document.getElementById("flowboard").getBoundingClientRect();
    return { x: offset.x - rect.left, y: offset.y - rect.top };
  };

  return (
    <ReactFlowProvider>
      <div id="flowboard" ref={drop} style={{ width: "100%", height: "100%" }}>
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
