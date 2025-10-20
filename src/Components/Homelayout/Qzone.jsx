import React from "react";
import swimImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
import bgImage from "../../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="bg-base-200 p-3">
        <h2 className="font-bold mb-5">Qzone</h2>
        <div className="">
          <img src={swimImage} alt="" />
          <img src={classImage} alt="" />
          <img src={playImage} alt="" />
        </div>
      </div>
      <div className="mt-4">
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
