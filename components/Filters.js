import React from "react";
import { FiltersDiv } from "../styles/dashBoard.module.scss";

const Filters = () => {
  return (
    <div className={FiltersDiv}>
      <div>
        <ul>
          <li>
            <input type="checkbox" name="twitter" defaultChecked /> Twitter
          </li>
          <li>
            <input type="checkbox" name="google" defaultChecked /> Google
          </li>
          <li>
            <input type="checkbox" name="trip_advisor" defaultChecked /> Trip
            Advisor
          </li>
        </ul>
      </div>
      <div>
        {" "}
        <ul>
          <li>
            <input type="checkbox" name="twitter" defaultChecked /> All time
          </li>
          <li>
            <input type="checkbox" name="google" /> Last 30 days
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
