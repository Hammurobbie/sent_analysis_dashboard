import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import {
  ResultsCont,
  ResultsDiv,
  ResultsInner,
  SearchingDiv,
  SearchDiv,
} from "../styles/dashBoard.module.scss";

const Results = ({ curResult, typedString }) => {
  const [topResult, setTopResult] = useState("positive");

  useEffect(() => {
   if (
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
  }, [curResult]);

  const toPercentage = (value) => {
    return (value * 100).toFixed(2) + '%'
  }

  return (
    <>
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
                  Positive: <span>{toPercentage(curResult?.average_scores?.positive)}</span>
                </li>
                <li style={{ color: topResult === "neutral" ? "#cf9529" : "" }}>
                  Neutral:{" "}
                  <span style={{ marginLeft: "9.5px" }}>
                    {toPercentage(curResult?.average_scores?.neutral)}
                  </span>
                </li>
                <li
                  style={{ color: topResult === "negative" ? "#e63e1c" : "" }}
                >
                  Negative: <span>{toPercentage(curResult?.average_scores?.negative)}</span>
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
    {curResult?.average_scores ?  (<a  href="/word-cloud" target="_blank" rel="noopener noreferrer " className={{fontSize: "2rem"}}>Word Cloud</a>) : null}
    </>
  );
};

export default Results;
