import React from "react";
import { FiltersDiv } from "../styles/dashBoard.module.scss";

const Filters = () => {
  return (
    <div className={FiltersDiv}>
      <div>
        <ul>
          <li>
            <input type="checkbox" name="twitter" /> Twitter
          </li>
          <li>
            <input type="checkbox" name="google" /> Google
          </li>
          <li>
            <input type="checkbox" name="trip_advisor" /> Trip Advisor
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul>
          <li>
            <input type="checkbox" name="twitter" /> Last 30 days
          </li>
          <li>
            <input type="checkbox" name="google" /> Last 10 days
          </li>
          <li>
            <input type="checkbox" name="trip_advisor" /> Today
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
