import React from "react";
import Page from "../components/Layout/Page";
import ExploreCard from "../components/UI/ExploreCard";

const explore = () => {
  return (
    <Page>
      <div className="grid gap-[30px] px-[30px] py-[40px]">
        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>

        {/* Second Row: 1 Card spanning full width */}
        <div className="col-span-1">
          <ExploreCard />
        </div>

        {/* Third Row: 2 Cards each taking half width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          <ExploreCard />
          <ExploreCard />
        </div>
      </div>
    </Page>
  );
};

export default explore;
