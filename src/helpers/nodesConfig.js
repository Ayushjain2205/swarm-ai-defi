// helpers/nodesConfig.js

const nodesConfig = [
  {
    id: "1",
    type: "useNode",
    data: { use_type: "wallet" },
    position: { x: 50, y: 300 },
    addAfter: 0, // in seconds
    targets: ["2"], // ids of target nodes
  },
  {
    id: "2",
    type: "useNode",
    data: { label: "Second Node", use_type: "chain" },
    position: { x: 650, y: 150 },
    addAfter: 5, // in seconds
    targets: [], // ids of target nodes
  },
  {
    id: "3",
    type: "useNode",
    data: { label: "Third Node", use_type: "currency" },
    position: { x: 650, y: 380 },
    addAfter: 15, // in seconds
    sources: ["1"], // ids of source nodes
  },
  {
    id: "4",
    type: "useNode",
    data: { label: "Third Node", use_type: "strategy" },
    position: { x: 650, y: 600 },
    addAfter: 15, // in seconds
    sources: ["1"], // ids of source nodes
  },
  {
    id: "5",
    type: "useNode",
    data: { label: "Third Node", use_type: "portfolio" },
    position: { x: 1200, y: 350 },
    addAfter: 15, // in seconds
    sources: ["2", "3", "4"], // ids of source nodes
  },
  // Add more nodes as needed
];

export default nodesConfig;
