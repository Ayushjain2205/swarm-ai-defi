// helpers/nodesConfig.js

const nodesConfig = [
  {
    id: "1",
    type: "useNode",
    data: { use_type: "analyze" },
    position: { x: 50, y: 300 },
    addAfter: 0, // in seconds
    targets: ["2"], // ids of target nodes
  },
  {
    id: "2",
    type: "useNode",
    data: { label: "Second Node", use_type: "youtube" },
    position: { x: 650, y: 150 },
    addAfter: 5, // in seconds
    targets: [], // ids of target nodes
  },
  {
    id: "3",
    type: "useNode",
    data: { label: "Third Node", use_type: "udemy" },
    position: { x: 650, y: 380 },
    addAfter: 15, // in seconds
    sources: ["1"], // ids of source nodes
  },
  {
    id: "4",
    type: "useNode",
    data: { label: "Third Node", use_type: "google" },
    position: { x: 650, y: 600 },
    addAfter: 15, // in seconds
    sources: ["1"], // ids of source nodes
  },
  {
    id: "5",
    type: "useNode",
    data: { label: "Third Node", use_type: "report" },
    position: { x: 1300, y: 350 },
    addAfter: 15, // in seconds
    sources: ["2", "3", "4"], // ids of source nodes
  },
  // Add more nodes as needed
];

export default nodesConfig;
