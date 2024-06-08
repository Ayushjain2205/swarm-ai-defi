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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [input1, setInput1] = useState(""); // State for first input field
  const [input2, setInput2] = useState(""); // State for second input field
  const { project } = useReactFlow();
  const nodeId = useRef(1);

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
        id: `${nodeId.current++}`,
        position,
        data: { label: `Node ${nodeId.current - 1}`, agent_type: item.type },
        type: "agentNode",
      };
      setNodes((nds) => [...nds, newNode]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const handlePublishClick = () => {
    setIsModalOpen(true); // Open the modal when Publish is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div
      id="flowboard"
      className="absolute h-[calc(100vh-78px)] w-[calc(100vw-120px)]"
      ref={drop}
    >
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        nodesDraggable
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
        <button
          className="flex items-center justify-center h-[45px] w-[182px] text-white bg-black rounded-[5px] cursor-pointer"
          onClick={handlePublishClick}
        >
          Publish
        </button>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-[30px] rounded-[10px] w-[530px] h-[367px] flex flex-col justify-between"
            style={{
              border: "1px solid #EBEBEB",
              background: "#FFF",
              boxShadow: "1px 1px 10px 0px rgba(195, 195, 195, 0.25)",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <p className="text-[24px] font-[500] mb-[8px]">
              Congrats on creating a agent swarm!!!
            </p>
            <input
              type="text"
              placeholder="Name"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="w-full border-[2px] border-[#EBEBEB] rounded-[4px] px-3 py-2 mb-4 text-black text-[14px] focus:outline-none"
            />

            <input
              type="text"
              placeholder="$$$"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="w-full border-[2px] border-[#EBEBEB] rounded-[4px] px-3 py-2 mb-4 text-black text-[14px] focus:outline-none"
            />

            <button
              className="w-full h-[45px] text-white text-[16px] font-[500] bg-black rounded-[5px] mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="w-full h-[45px] text-black text-opacity-30 text-[16px] font-[500] bg-white rounded-[5px] mt-4"
              onClick={handleSubmit}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
