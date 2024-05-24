import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Page from "../components/Layout/Page";
import FlowBoard from "../components/UI/FlowBoard";
import DraggableItem from "../components/UI/DraggableItem";

const create = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Page>
        <div className="flex flex-row h-[calc(100vh-78px)]">
          <div className="flex flex-col w-[96px] h-full overflow-y-auto scrollbar-hide border-r-[2px] border-[#EBEBEB]">
            <div className="flex flex-col items-center gap-[20px] py-[20px] border-b-[2px] border-[#EBEBEB]">
              <DraggableItem type="instagram">Instagram</DraggableItem>
              <DraggableItem type="twitter">Twitter</DraggableItem>
              <DraggableItem type="image">Image</DraggableItem>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.67848 10.881C2.7676 10.7036 2.92344 10.5687 3.11184 10.506C3.30023 10.4433 3.5058 10.4579 3.68348 10.5465L12.349 14.877L21.013 10.545C21.1011 10.5 21.1973 10.4728 21.296 10.4652C21.3947 10.4575 21.4939 10.4694 21.5879 10.5003C21.682 10.5311 21.769 10.5803 21.844 10.6449C21.9189 10.7096 21.9803 10.7884 22.0247 10.8769C22.069 10.9654 22.0954 11.0618 22.1023 11.1605C22.1093 11.2592 22.0966 11.3584 22.065 11.4522C22.0334 11.546 21.9836 11.6326 21.9183 11.7071C21.8531 11.7815 21.7738 11.8423 21.685 11.886L12.685 16.386C12.5807 16.4383 12.4656 16.4655 12.349 16.4655C12.2323 16.4655 12.1173 16.4383 12.013 16.386L3.01298 11.886C2.83555 11.7969 2.7007 11.641 2.63799 11.4526C2.57529 11.2642 2.58985 11.0587 2.67848 10.881Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-[20px] py-[20px] border-b-[2px] border-[#EBEBEB]">
              <div className="size-[45px] border border-black rounded"></div>
              <div className="size-[45px] border border-black rounded"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.67848 10.881C2.7676 10.7036 2.92344 10.5687 3.11184 10.506C3.30023 10.4433 3.5058 10.4579 3.68348 10.5465L12.349 14.877L21.013 10.545C21.1011 10.5 21.1973 10.4728 21.296 10.4652C21.3947 10.4575 21.4939 10.4694 21.5879 10.5003C21.682 10.5311 21.769 10.5803 21.844 10.6449C21.9189 10.7096 21.9803 10.7884 22.0247 10.8769C22.069 10.9654 22.0954 11.0618 22.1023 11.1605C22.1093 11.2592 22.0966 11.3584 22.065 11.4522C22.0334 11.546 21.9836 11.6326 21.9183 11.7071C21.8531 11.7815 21.7738 11.8423 21.685 11.886L12.685 16.386C12.5807 16.4383 12.4656 16.4655 12.349 16.4655C12.2323 16.4655 12.1173 16.4383 12.013 16.386L3.01298 11.886C2.83555 11.7969 2.7007 11.641 2.63799 11.4526C2.57529 11.2642 2.58985 11.0587 2.67848 10.881Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-[20px] py-[20px] ">
              <div className="size-[45px] border border-black rounded"></div>
              <div className="size-[45px] border border-black rounded"></div>
              <div className="size-[45px] border border-black rounded"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.67848 10.881C2.7676 10.7036 2.92344 10.5687 3.11184 10.506C3.30023 10.4433 3.5058 10.4579 3.68348 10.5465L12.349 14.877L21.013 10.545C21.1011 10.5 21.1973 10.4728 21.296 10.4652C21.3947 10.4575 21.4939 10.4694 21.5879 10.5003C21.682 10.5311 21.769 10.5803 21.844 10.6449C21.9189 10.7096 21.9803 10.7884 22.0247 10.8769C22.069 10.9654 22.0954 11.0618 22.1023 11.1605C22.1093 11.2592 22.0966 11.3584 22.065 11.4522C22.0334 11.546 21.9836 11.6326 21.9183 11.7071C21.8531 11.7815 21.7738 11.8423 21.685 11.886L12.685 16.386C12.5807 16.4383 12.4656 16.4655 12.349 16.4655C12.2323 16.4655 12.1173 16.4383 12.013 16.386L3.01298 11.886C2.83555 11.7969 2.7007 11.641 2.63799 11.4526C2.57529 11.2642 2.58985 11.0587 2.67848 10.881Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <FlowBoard />
          </div>
        </div>
      </Page>
    </DndProvider>
  );
};

export default create;
