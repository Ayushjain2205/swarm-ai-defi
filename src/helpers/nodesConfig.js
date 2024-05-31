// helpers/nodesConfig.js

const nodesConfig = [
  {
    id: "1",
    type: "useNode",
    data: { use_type: "instagram" },
    position: { x: 50, y: 200 },
    addAfter: 0, // in seconds
  },
  {
    id: "2",
    type: "useNode",
    data: { label: "Second Node", use_type: "browse" },
    position: { x: 550, y: 200 },
    addAfter: 5, // in seconds
  },
  {
    id: "3",
    type: "useNode",
    data: { label: "Second Node", use_type: "browse" },
    position: { x: 950, y: 200 },
    addAfter: 15, // in seconds
  },
  // Add more nodes as needed
];

export default nodesConfig;
