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
      <div className="absolute flex w-full items-center justify-center bottom-[40px]">
        <button className="flex items-center justify-center h-[45px] w-[45px] rounded-[5px] bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M16 8.47461C16 10.5963 15.1571 12.6312 13.6569 14.1315C12.1566 15.6318 10.1217 16.4746 8 16.4746C5.87827 16.4746 3.84344 15.6318 2.34315 14.1315C0.842855 12.6312 0 10.5963 0 8.47461C0 6.35288 0.842855 4.31805 2.34315 2.81776C3.84344 1.31746 5.87827 0.474609 8 0.474609C10.1217 0.474609 12.1566 1.31746 13.6569 2.81776C15.1571 4.31805 16 6.35288 16 8.47461ZM6.25 5.47461C5.56 5.47461 5 6.03461 5 6.72461V10.2246C5 10.5561 5.1317 10.8741 5.36612 11.1085C5.60054 11.3429 5.91848 11.4746 6.25 11.4746C6.58152 11.4746 6.89946 11.3429 7.13388 11.1085C7.3683 10.8741 7.5 10.5561 7.5 10.2246V6.72461C7.5 6.03461 6.94 5.47461 6.25 5.47461ZM9.75 5.47461C9.06 5.47461 8.5 6.03461 8.5 6.72461V10.2246C8.5 10.5561 8.6317 10.8741 8.86612 11.1085C9.10054 11.3429 9.41848 11.4746 9.75 11.4746C10.0815 11.4746 10.3995 11.3429 10.6339 11.1085C10.8683 10.8741 11 10.5561 11 10.2246V6.72461C11 6.03461 10.44 5.47461 9.75 5.47461Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}