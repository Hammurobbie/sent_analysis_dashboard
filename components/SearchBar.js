import React from "react";
import Typed from "react-typed";
import { SearchCont } from "../styles/dashBoard.module.scss";

const SearchBar = ({
  handleSubmit,
  setSearchValue,
  searchValue,
  setCurResult,
  curResult,
  errorMessage,
  setErrorMessage,
}) => {
  const handleInput = (e) => {
    setSearchValue(e.target.value);
    setErrorMessage("");
    if (!e.target.value) {
      setCurResult(null);
    }
  };

  return (
    <form
      style={{ height: curResult?.scores ? "40px" : "" }}
      className={SearchCont}
      onSubmit={handleSubmit}
    >
      <Typed
        strings={[
          "Search 'Beverly Hilton'",
          "Search 'Waldorf Astoria'",
          "Search 'Hilton'",
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
        <input
          disabled={curResult === "searching"}
          onChange={handleInput}
          type="text"
          id="search_bar"
          autoComplete="off"
        />
      </Typed>
      {searchValue && !curResult ? (
        <button>Press Enter to search</button>
      ) : (
        <em>{errorMessage}</em>
      )}
    </form>
  );
};

export default SearchBar;
