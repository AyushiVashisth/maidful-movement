import React from "react";
import UnderWeight from "./UnderWeight";
import Normal from "./Normal";
import OverWeight from "./OverWeight";
import OBESE from "./OBESE";
import ExtremlyOBESE from "./ExtremlyOBESE";

const WorkoutChat = () => {
  return (
    <div className="mt-20">
      <div className="h-screen w-3/4 mx-auto">
        <UnderWeight />
      </div>
      <div className="h-screen w-3/4 mx-auto">
        <Normal />
      </div>
      <div className="h-screen w-3/4 mx-auto">
        <OverWeight />
      </div>
      <div className="h-screen w-3/4 mx-auto">
        <OBESE />
      </div>
      <div className="h-screen w-3/4 mx-auto">
        <ExtremlyOBESE />
      </div>
    </div>
  );
};

export default WorkoutChat;
