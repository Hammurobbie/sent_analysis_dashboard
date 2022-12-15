import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import axios from "axios";
import {
  ResultsCont,
  ResultsDiv,
  ResultsInner,
  SearchingDiv,
  SearchDiv,
} from "../styles/dashBoard.module.scss";

const Results = ({ curResult, typedString }) => {
  const [topResult, setTopResult] = useState("positive");
  const [weightedResult, setWeightedResult] = useState();

  useEffect(() => {
    if (
      weightedResult?.neutral > weightedResult?.positive &&
      weightedResult?.neutral > weightedResult?.negative
    ) {
      setTopResult("neutral");
    } else if (
      weightedResult?.negative > weightedResult?.positive &&
      weightedResult?.negative > weightedResult?.neutral
    ) {
      setTopResult("negative");
    } else if (
      weightedResult?.positive > weightedResult?.negative &&
      weightedResult?.positive > weightedResult?.neutral
    ) {
      setTopResult("positive");
    } else if (
      curResult?.average_scores?.neutral > curResult?.average_scores?.positive &&
      curResult?.average_scores?.neutral > curResult?.average_scores?.negative
    ) {
      setTopResult("neutral");
    } else if (
      curResult?.average_scores?.negative > curResult?.average_scores?.positive &&
      curResult?.average_scores?.negative > curResult?.average_scores?.neutral
    ) {
      setTopResult("negative");
    } else setTopResult("positive");
  }, [curResult, weightedResult]);

  // TODO: get twitter user followers and recalculate 
  // scores with weight based on tweet reach

  // useEffect(() => {
  //   if(curResult?.all_scores) {
  //     axios
  //     .post("/api/followers", { users: curResult?.all_scores })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //   }
  // },[curResult?.all_scores]);

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
          <div className={ResultsInner}>
            <div>
              <h1>Scores:</h1>
              <ul>
                <li
                  style={{ color: topResult === "positive" ? "#7ab35b" : "" }}
                >
                  Positive: <span>{weightedResult?.positive || curResult?.average_scores?.positive}</span>
                </li>
                <li style={{ color: topResult === "neutral" ? "#cf9529" : "" }}>
                  Neutral:{" "}
                  <span style={{ marginLeft: "9.5px" }}>
                    {weightedResult?.neutral || curResult?.average_scores?.neutral}
                  </span>
                </li>
                <li
                  style={{ color: topResult === "negative" ? "#e63e1c" : "" }}
                >
                  Negative: <span>{weightedResult?.negative || curResult?.average_scores?.negative}</span>
                </li>
              </ul>
            </div>
            <div>
              <h1>Key Words:</h1>
              <ul>
                {curResult?.key_words?.map((w) => (
                  <li
                    key={w.word}
                    style={{
                      color:
                        w.sentiment === "positive"
                          ? "#7ab35b"
                          : w.sentiment === "neutral"
                          ? "#cf9529"
                          : w.sentiment === "negative"
                          ? "#e63e1c"
                          : "",
                    }}
                  >
                    {w?.word}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
