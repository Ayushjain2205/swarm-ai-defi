// helpers/nodesConfig.js

const nodesConfig = [
  {
    id: "1",
    type: "useNode",
    data: { use_type: "analyze" },
    position: { x: 50, y: 150 },
    addAfter: 0, // in seconds
  },
  {
    id: "2",
    type: "useNode",
    data: { label: "Second Node", use_type: "youtube" },
    position: { x: 550, y: 150 },
    addAfter: 5, // in seconds
  },
  {
    id: "3",
    type: "useNode",
    data: { label: "Second Node", use_type: "google" },
    position: { x: 550, y: 550 },
    addAfter: 15, // in seconds
  },
  // Add more nodes as needed
];

export default nodesConfig;
