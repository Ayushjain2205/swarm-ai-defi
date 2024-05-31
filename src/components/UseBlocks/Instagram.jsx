import React from "react";
import Loader from "../UI/Loader";
import UseBlock from "../Layout/UseBlock";

const Instagram = () => {
  return (
    <UseBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png">
      <Loader />
    </UseBlock>
  );
};

export default Instagram;
