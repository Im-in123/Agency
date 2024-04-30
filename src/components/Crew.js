import React from "react";
import { REP2_NAME, REP2_POS, REP_NAME, REP_POS } from "../constants/constant";
import i1 from "../assets/images/default.jpg";

const Crew = () => {
  return (
    <>
      <h1 className="big-h black center-text">Meet some Team Members </h1>

      <div className="rep-cont">
        <div className="rep">
          <span>{REP_POS}</span>
          <img src={i1} alt="rep" />
          <span>{REP_NAME}</span>
        </div>
        <div className="rep">
          <span>Systems Analyst/Administrator</span>

          <img src={i1} alt="rep" />
          <span>Alexander Mitchell</span>
        </div>
        <div className="rep">
          <span>{REP2_POS}</span>

          <img src={i1} alt="rep" />
          <span>{REP2_NAME}</span>
        </div>
      </div>
    </>
  );
};

export default Crew;
