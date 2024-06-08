import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ReactFlowProvider } from "reactflow";
import Page from "../components/Layout/Page";
import FlowBoard from "../components/UI/FlowBoard";
import DraggableItem from "../components/UI/DraggableItem";

const create = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleWidth = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ReactFlowProvider>
        <Page>
          <div className="relative flex flex-row h-[calc(100vh-78px)]">
            <div
              className={`flex flex-col absolute top-0 bg-[#F8F8F8] h-full pt-[10px] ${
                isExpanded ? "w-[340px]" : "w-[110px]"
              } z-[50]`}
            >
              <div className="flex flex-row mt-[20px] overflow-hidden">
                <div className="flex flex-col">
                  <p className="text-center w-full text-[13px] font-[700]">
                    PROTOCOLS
                  </p>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-[20px] overflow-hidden">
                <div className="flex flex-col">
                  <p className="text-center w-full text-[13px] font-[700]">
                    WALLETS
                  </p>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-[20px] overflow-hidden">
                <div className="flex flex-col">
                  <p className="text-center w-full text-[13px] font-[700]">
                    ACTION
                  </p>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-[20px] overflow-hidden">
                <div className="flex flex-col">
                  <p className="text-center w-full text-[13px] font-[700]">
                    PLATFORMS
                  </p>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-[20px] overflow-hidden">
                <div className="flex flex-col">
                  <p className="text-center w-full text-[13px] font-[700]">
                    CHAINS
                  </p>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                  <div
                    className={`flex flex-row gap-[30px] px-[35px] py-[10px] ${
                      isExpanded ? "w-[340px]" : "w-[110px] overflow-hidden"
                    } `}
                  >
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                    <DraggableItem
                      type="instagram"
                      icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    />
                    <DraggableItem
                      type="twitter"
                      icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                    />
                  </div>
                </div>
              </div>

              <button
                className="absolute right-[-16px] bottom-[20px] flex flex-row items-center justify-center h-[32px] w-[32px] bg-black rounded-[5px]"
                onClick={toggleWidth}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="14"
                  viewBox="0 0 6 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.26607 13.8189C1.13989 13.7555 1.044 13.6447 0.999409 13.5107C0.954819 13.3768 0.965173 13.2306 1.0282 13.1042L4.10767 6.94211L1.02713 0.781047C0.995113 0.718366 0.975817 0.649967 0.970357 0.579794C0.964896 0.50962 0.973381 0.439059 0.99532 0.372179C1.01726 0.3053 1.05222 0.243424 1.09819 0.190121C1.14415 0.136817 1.20022 0.0931396 1.26314 0.0616064C1.32607 0.0300722 1.39462 0.0113058 1.46483 0.0063896C1.53504 0.0014734 1.60554 0.0105037 1.67224 0.0329599C1.73895 0.055417 1.80055 0.0908556 1.8535 0.137234C1.90645 0.183612 1.94969 0.240011 1.98073 0.303181L5.18073 6.70318C5.2179 6.77735 5.23725 6.85916 5.23725 6.94211C5.23725 7.02507 5.2179 7.10688 5.18073 7.18105L1.98073 13.581C1.91736 13.7072 1.80654 13.8031 1.67257 13.8477C1.5386 13.8923 1.39241 13.8819 1.26607 13.8189Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col ml-[120px] flex-grow">
              <FlowBoard />
            </div>
          </div>
        </Page>
      </ReactFlowProvider>
    </DndProvider>
  );
};

export default create;
