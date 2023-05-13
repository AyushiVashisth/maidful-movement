import React from "react";
import ChartExample from "./Chart";
import UnderWeight from "./UnderWeight";

const Bmichat = () => {
  return (
    <div>
      <div className="h-screen w-3/4 mx-auto">
        <ChartExample />
      </div>
      <div className="h-screen w-3/4 mx-auto">
        <UnderWeight />
      </div>
    </div>
  );
};

export default Bmichat;
