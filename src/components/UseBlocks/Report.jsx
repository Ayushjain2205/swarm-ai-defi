import React from "react";
import UseThinking from "../UI/UseThinking";
import Loader from "../UI/Loader";
import UseBlock from "../Layout/UseBlock";

const Report = () => {
  return (
    <UseBlock label="Report" label_color="#87D4AB">
      <Loader />
      <UseThinking />
    </UseBlock>
  );
};

export default Report;
