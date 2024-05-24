import React, { useState, useCallback, useRef, useEffect } from "react";
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
  const { project, fitView } = useReactFlow();
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

  // Fit the view whenever nodes state changes
  useEffect(() => {
    fitView();
  }, [nodes, fitView]);

  return (
    <div
      id="flowboard"
      className="absolute h-[calc(100vh-78px)]"
      ref={drop}
      style={{ width: "100%" }}
    >
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
      <div className="flex flex-row w-[calc(100vw-96px)] justify-between relative bottom-[75px] px-[30px] z-50">
        <button
          className="flex items-center justify-center h-[45px] w-[182px] text-white bg-black rounded-[5px] cursor-pointer disabled:opacity-40"
          disabled
        >
          Preview
        </button>
        <button className="flex items-center justify-center h-[45px] w-[182px] text-white bg-black rounded-[5px] cursor-pointer">
          Publish
        </button>
      </div>
    </div>
  );
}
