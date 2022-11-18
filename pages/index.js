import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Footer, Main, Logo } from "../styles/dashBoard.module.scss";
import hiltonLogo from "../images/hilton_logo_blue.png";

import NavBar from "../components/NavBar";
import Results from "../components/Results";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [curResult, setCurResult] = useState(null);
  const [timeFilter, setTimeFilter] = useState("all_time");
  const [sourceFilter, setSourceFilter] = useState([
    "twitter",
    "google",
    "trip_advisor",
  ]);
  const [typedString, setTypedString] = useState([
    "Analyzing Tweets",
    "Analyzing Google Reviews",
    "Analyzing Trip Advisor Ratings",
    "Analyzing .",
    "Analyzing ..",
    "Analyzing ...",
    "Analyzing ..",
    "Analyzing .",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue !== "") {
      setCurResult("searching");
      // mock api call
      axios
        .post("/api/analysis", {
          search_value: searchValue,
          sources: "twitter",
          time: timeFilter,
        })
        .then((res) => {
          console.log(res.data);
          setCurResult(res.data);
        })
        .catch((err) => {
          console.log(err.message);
          setCurResult("No Result");
        });
    }
  };

  return (
    <div>
      <Head>
        <title>Sentiment Analysis Dashboard</title>
        <meta
          name="Sentiment Analysis Dashboard"
          content="Sentiment Analysis Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Main}>
        <NavBar />
        <SearchBar
          handleSubmit={handleSubmit}
          setCurResult={setCurResult}
          setSearchValue={setSearchValue}
        />
        <Results curResult={curResult} typedString={typedString} />
        <Filters
          sourceFilter={sourceFilter}
          setSourceFilter={setSourceFilter}
          setTimeFilter={setTimeFilter}
          setTypedString={setTypedString}
          typedString={typedString}
        />
      </main>

      <footer className={Footer}>
        <p>Powered by</p>
        <span className={Logo}>
          <Image src={hiltonLogo} alt="Hilton Logo" />
        </span>
      </footer>
    </div>
  );
}
