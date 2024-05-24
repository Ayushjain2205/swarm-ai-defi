import React, { useState, useCallback, useRef } from "react";
import { useDrop } from "react-dnd";
import ReactFlow, {
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  useReactFlow,
} from "reactflow";
import AgentNode from "./AgentNode";

import "reactflow/dist/style.css";

const nodeTypes = { agentNode: AgentNode };

export default function FlowBoard() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const { project } = useReactFlow();
  const nodeId = useRef(1); // Ref to keep track of the node IDs

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: "smoothstep" }, eds)),
    []
  );

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "AGENT_BLOCK",
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      const position = project(clientOffset);
      const newNode = {
        id: `${nodeId.current++}`, // Generate unique ID using ref
        position,
        data: { label: `Node ${nodeId.current - 1}`, agent_type: item.type },
        type: "agentNode",
      };
      setNodes((nds) => [...nds, newNode]); // Append new node to the existing nodes
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div id="flowboard" ref={drop} style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect} // Handle edge creation
        nodeTypes={nodeTypes}
        nodesDraggable
        fitView
      >
        <Background variant="dots" gap={36} size={2} />
      </ReactFlow>
    </div>
  );
}
