import React, { useState } from "react";
import Typed from "react-typed";
import {
  ResultsCont,
  ResultsDiv,
  SearchingDiv,
  SearchDiv,
} from "../styles/dashBoard.module.scss";

const Results = () => {
  const [curResult, setCurResult] = useState(null);
  return (
    <div className={ResultsCont}>
      <div
        className={
          curResult === "searching"
            ? SearchingDiv
            : curResult
            ? ResultsDiv
            : SearchDiv
        }
      >
        {!curResult ? (
          <p>Awaiting Input</p>
        ) : curResult === "searching" ? (
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
        ) : (
          <div>Results</div>
        )}
      </div>
    </div>
  );
};

export default Results;
