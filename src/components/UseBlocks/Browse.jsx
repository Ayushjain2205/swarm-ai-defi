import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";

const Browse = () => {
  return (
    <UseBlock label="Browse" label_color="#87D4AB">
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
    </UseBlock>
  );
};

export default Browse;
