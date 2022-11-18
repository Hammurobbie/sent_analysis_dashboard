import React from "react";
import Typed from "react-typed";
import {
  ResultsCont,
  ResultsDiv,
  SearchingDiv,
  SearchDiv,
} from "../styles/dashBoard.module.scss";

const Results = ({ curResult, typedString }) => {
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
            strings={typedString}
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
