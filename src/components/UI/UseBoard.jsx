import React, { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDrop } from "react-dnd";
import ReactFlow, {
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  useReactFlow,
} from "reactflow";
import AgentNode from "./AgentNode";
import cardsData from "../../helpers/cardsData";

import "reactflow/dist/style.css";

const nodeTypes = { agentNode: AgentNode };

export default function UseBoard() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const { project, fitView } = useReactFlow();
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
      setEdges((eds) => addEdge({ ...params, type: "smoothstep" }, eds)),
    []
  );

  useEffect(() => {
    // Initialize with a simple node
    setNodes([
      {
        id: "1",
        type: "agentNode",
        data: { label: "Start Node", agent_type: "simple" },
        position: { x: 250, y: 5 },
      },
    ]);
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
      <div className="absolute top-[10px] left-0 w-full z-50">
        <p className="text-[32px] font-[500] text-center">
          The agent will analyse a campaign on Instagram and generate a report
        </p>
        <div className="flex flex-row w-full items-center mb-[20px] justify-center">
          {icon && (
            <img
              src={icon.src}
              className="size-[30px] rounded"
              alt={icon.alt}
            />
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="60"
            viewBox="0 0 84 60"
            fill="none"
          >
            <path
              d="M0.341797 28.985H6.9315C12.4543 28.985 16.9315 24.5078 16.9315 18.985V10.7422C16.9315 5.21935 21.4087 0.742188 26.9315 0.742188H44.7207C50.2436 0.742188 54.7207 5.21934 54.7207 10.7422V50.5301C54.7207 54.9841 58.3314 58.5949 62.7855 58.5949V58.5949C67.2395 58.5949 70.8502 54.9841 70.8502 50.5301V38.9849C70.8502 33.4621 75.3274 28.985 80.8502 28.985H83.293"
              stroke="black"
              stroke-opacity="0.14"
            />
          </svg>
          {parsedLabels.map((label, index) => (
            <React.Fragment key={index}>
              <div
                className="h-[24px] w-[72px] flex items-center justify-center font-[500] text-[14px] text-white rounded-[8px]"
                style={{ backgroundColor: label.color }}
              >
                {label.name}
              </div>
              {index < parsedLabels.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="32"
                  viewBox="0 0 84 32"
                  fill="none"
                >
                  <path
                    d="M0.292969 10.5448H4.18692C6.88899 10.5448 9.07945 8.35437 9.07945 5.6523V5.6523C9.07945 2.95023 11.2699 0.759766 13.972 0.759766H14.2492C17.1044 0.759766 19.419 3.07436 19.419 5.92955V21.1465C19.419 26.6693 23.8962 31.1465 29.419 31.1465H56.0279C61.2189 31.1465 65.4271 26.9383 65.4271 21.7472V21.7472C65.4271 16.5562 69.6353 12.348 74.8264 12.348H83.2617"
                    stroke="#DBDBDB"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
