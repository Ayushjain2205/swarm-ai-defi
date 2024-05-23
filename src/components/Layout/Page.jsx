import React from "react";
import { Work_Sans } from "next/font/google";
import Navbar from "./Navbar";

const work = Work_Sans({ subsets: ["latin"] });

const Page = ({ children }) => {
  return (
    <div className={`${work.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default Page;
