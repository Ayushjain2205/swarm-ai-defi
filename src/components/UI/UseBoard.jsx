import React, { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ReactFlow, {
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import AgentNode from "./AgentNode";
import UseNode from "./UseNode";
import cardsData from "../../helpers/cardsData";
import UseHeader from "./UseHeader";

import "reactflow/dist/style.css";

const nodeTypes = { agentNode: AgentNode, useNode: UseNode };

export default function UseBoard() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const nodeId = useRef(1); // Ref to keep track of the node IDs

  const router = useRouter();
  const { cardIndex } = router.query;
  const cardData = cardIndex !== undefined ? cardsData[cardIndex] : {};
  const { title, icon, labels } = cardData;
  const parsedLabels = labels || [];

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
      setEdges((eds) =>
        addEdge({ ...params, type: "smoothstep", animated: true }, eds)
      ),
    []
  );

  useEffect(() => {
    // Initialize with a simple node
    setNodes([
      {
        id: "1",
        type: "useNode",
        data: { label: "Start Node", use_type: "report" },
        position: { x: 50, y: 200 },
      },
    ]);

    // Add another node after 10 seconds and connect them
    const timer = setTimeout(() => {
      const newNodeId = `${nodeId.current + 1}`;

      setNodes((nds) => [
        ...nds,
        {
          id: newNodeId,
          type: "useNode",
          data: { label: "Second Node", use_type: "browse" },
          position: { x: 550, y: 200 },
        },
      ]);

      setEdges((eds) => [
        ...eds,
        {
          id: "e1-2",
          source: "1",
          target: newNodeId,
          type: "smoothstep",
          animated: true,
        },
      ]);

      nodeId.current += 1; // Increment node ID
    }, 5000);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="flowboard" className="relative h-[calc(100vh-78px)] w-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect} // Handle edge creation
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        panOnScroll={false}
        zoomOnScroll={false}
        panOnDrag={false}
        zoomOnDoubleClick={false}
      >
        <Background variant="dots" gap={36} size={2} />
      </ReactFlow>
      <UseHeader
        title="The agent will analyse a campaign on Instagram and generate a report"
        icon={icon}
        labels={parsedLabels}
      />
    </div>
  );
}
