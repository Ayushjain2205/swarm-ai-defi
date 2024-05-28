import Page from "../../components/Layout/Page";
import { ReactFlowProvider } from "reactflow";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UseBoard from "../../components/UI/UseBoard";

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReactFlowProvider>
        <Page>
          <UseBoard />
        </Page>
      </ReactFlowProvider>
    </DndProvider>
  );
}
