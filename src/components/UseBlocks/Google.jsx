import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";

const Google = () => {
  return (
    <UseBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png">
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
    </UseBlock>
  );
};

export default Google;
