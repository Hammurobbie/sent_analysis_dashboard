import React from "react";
import { FiltersDiv } from "../styles/dashBoard.module.scss";

const Filters = ({
  sourceFilter,
  setSourceFilter,
  setTimeFilter,
  setTypedString,
  typedString,
  curResult,
}) => {
  const handleChange = (e) => {
    if (e.target.className) {
      const cbs = document.getElementsByClassName("timeCb");
      for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
      }
      e.target.checked = true;
      setTimeFilter(e.target.name);
    } else if (
      sourceFilter.includes(e.target.name) &&
      sourceFilter.length > 1
    ) {
      const filterStrings = typedString.filter(
        (s) =>
          s.split(" ")[1].substring(0, 2).toLowerCase() !==
          e.target.name.substring(0, 2)
      );
      setTypedString(filterStrings);
      const filteredSources = sourceFilter.filter((s) => s !== e.target.name);
      setSourceFilter(filteredSources);
    } else if (!sourceFilter.includes(e.target.name)) {
      let updatedStrings = ["Analyzing Tweets", ...typedString];
      if (e.target.name === "google") {
        updatedStrings = ["Analyzing Google Reviews", ...typedString];
      } else if (e.target.name === "trip_advisor") {
        updatedStrings = ["Analyzing Trip Advisor Ratings", ...typedString];
      }
      setTypedString(updatedStrings);
      const updatedSources = [...sourceFilter, e.target.name];
      setSourceFilter(updatedSources);
    } else {
      e.target.checked = true;
    }
  };

  return (
    <div className={FiltersDiv}>
      <div>
        <ul>
          <li>
            <input
              onChange={handleChange}
              type="checkbox"
              name="twitter"
              defaultChecked
              disabled={curResult === "searching"}
            />{" "}
            Twitter
          </li>
          <li>
            <input
              onChange={handleChange}
              type="checkbox"
              name="google"
              defaultChecked
              disabled={curResult === "searching"}
            />{" "}
            Google
          </li>
          <li>
            <input
              onChange={handleChange}
              type="checkbox"
              name="trip_advisor"
              defaultChecked
              disabled={curResult === "searching"}
            />{" "}
            Trip Advisor
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul>
          <li>
            <input
              className="timeCb"
              onChange={handleChange}
              type="checkbox"
              name="all_time"
              defaultChecked
              disabled={curResult === "searching"}
            />{" "}
            All time
          </li>
          <li>
            <input
              className="timeCb"
              onChange={handleChange}
              type="checkbox"
              name="30_days"
              disabled={curResult === "searching"}
            />{" "}
            Last 30 days
          </li>
          <li>
            <input
              className="timeCb"
              onChange={handleChange}
              type="checkbox"
              name="today"
              disabled={curResult === "searching"}
            />{" "}
            Today
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
