import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";

const Browse = () => {
  return (
    <div>
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
    </div>
  );
};

export default Browse;
