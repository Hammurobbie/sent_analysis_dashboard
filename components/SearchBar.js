import React from "react";
import Typed from "react-typed";
import { SearchCont } from "../styles/dashBoard.module.scss";

const SearchBar = ({ handleSubmit, setSearchValue, setCurResult }) => {
  const handleInput = (e) => {
    setSearchValue(e.target.value);
    if (!e.target.value) {
      setCurResult(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={SearchCont}>
      <Typed
        strings={[
          "Search by hotel",
          "Search by brand",
          "Search .",
          "Search ..",
          "Search ...",
          "Search ..",
          "Search .",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input onChange={handleInput} type="text" />
      </Typed>
    </form>
  );
};

export default SearchBar;
