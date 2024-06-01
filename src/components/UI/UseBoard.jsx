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
import nodesConfig from "../../helpers/nodesConfig";

import "reactflow/dist/style.css";

const nodeTypes = { agentNode: AgentNode, useNode: UseNode };

export default function UseBoard() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const currentNodeIndex = useRef(0); // Use ref to track the next node to be added

  const router = useRouter();
  const { cardIndex } = router.query;
  const cardData = cardIndex !== undefined ? cardsData[cardIndex] : {};
  const { title = "", icons = [], labels = [] } = cardData;

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

  const addNextNode = useCallback(() => {
    if (currentNodeIndex.current >= nodesConfig.length) return; // All nodes added

    const nextNodeConfig = nodesConfig[currentNodeIndex.current];
    setNodes((nds) => [
      ...nds,
      {
        ...nextNodeConfig,
        data: { ...nextNodeConfig.data, addNextNode }, // Add addNextNode to node data
      },
    ]);

    // Add edges for the next node
    if (nextNodeConfig.targets) {
      nextNodeConfig.targets.forEach((targetId) => {
        setEdges((eds) => [
          ...eds,
          {
            id: `e${nextNodeConfig.id}-${targetId}`,
            source: nextNodeConfig.id,
            target: targetId,
            type: "smoothstep",
            animated: true,
          },
        ]);
      });
    }

    if (nextNodeConfig.sources) {
      nextNodeConfig.sources.forEach((sourceId) => {
        setEdges((eds) => [
          ...eds,
          {
            id: `e${sourceId}-${nextNodeConfig.id}`,
            source: sourceId,
            target: nextNodeConfig.id,
            type: "smoothstep",
            animated: true,
          },
        ]);
      });
    }

    currentNodeIndex.current += 1; // Update to the next node index
  }, [nodesConfig]);

  useEffect(() => {
    // Add the initial node if there are nodesConfig available
    if (nodesConfig.length > 0 && currentNodeIndex.current === 0) {
      addNextNode();
    }
  }, [addNextNode]);

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
      <UseHeader title={title || "Title"} icons={icons} labels={labels} />
      {/* <div className="absolute flex w-full items-center justify-center bottom-[40px]">
        <button
          className="flex items-center justify-center h-[45px] w-[150px] rounded-[5px] bg-black text-white"
          onClick={addNextNode}
        >
          .
        </button>
      </div> */}
    </div>
  );
}
