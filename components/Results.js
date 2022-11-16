import React from "react";
import Typed from "react-typed";
import { ResultsDiv, SearchingDiv } from "../styles/dashBoard.module.scss";

const Results = () => {
  return (
    <div className={ResultsDiv}>
      <div className={SearchingDiv}>
        <Typed
          strings={[
            "Analyzing Tweets",
            "Analyzing Google Reviews",
            "Analyzing Trip Advisor Ratings",
            "Analyzing .",
            "Analyzing ..",
            "Analyzing ...",
            "Analyzing ..",
            "Analyzing .",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
      </div>
    </div>
  );
};

export default Results;
