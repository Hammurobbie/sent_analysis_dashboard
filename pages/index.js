import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import {
  Footer,
  Main,
  Logo,
  Overlay,
  Overlay2,
  Overlay3,
  Overlay4,
  Wrapper,
} from "../styles/dashBoard.module.scss";
import hiltonLogo from "../images/hilton_logo_blue.png";
import scanlines from "../images/scanlines.png";

import NavBar from "../components/NavBar";
import Results from "../components/Results";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import PointlessBinary from "../components/PointlessBinary";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [curResult, setCurResult] = useState(null);
  const [timeFilter, setTimeFilter] = useState("all_time");
  const [errorMessage, setErrorMessage] = useState("");
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
  const [runLog, setRunLog] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setRunLog(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const searchBar = document?.getElementById("search_bar");
    searchBar?.focus();
  }, [curResult]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue !== "") {
      setCurResult("searching");
      const searchBar = document?.getElementById("search_bar");
      searchBar?.blur();
      axios
        .post("/api/analysis", {
          search_value: searchValue,
          sources: "twitter",
          time: timeFilter,
        })
        .then((res) => {
          setCurResult(res.data);
        })
        .catch((err) => {
          // console.log(err.message);
          setCurResult(null);
          setErrorMessage("No results found");
        });
    } else setErrorMessage("Please provide query");
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

      <div className={Wrapper}>
        <Image className={Overlay} alt="crt overlay" src={scanlines} />
        <Image className={Overlay2} alt="crt overlay" src={scanlines} />
        <Image className={Overlay3} alt="crt overlay" src={scanlines} />
        <Image className={Overlay4} alt="crt overlay" src={scanlines} />
        <main className={Main}>
          <NavBar />
          <SearchBar
            handleSubmit={handleSubmit}
            setCurResult={setCurResult}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            curResult={curResult}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <Results curResult={curResult} typedString={typedString} />
          <Filters
            sourceFilter={sourceFilter}
            setSourceFilter={setSourceFilter}
            setTimeFilter={setTimeFilter}
            setTypedString={setTypedString}
            typedString={typedString}
            curResult={curResult}
          />
          <PointlessBinary runLog={runLog} />
        </main>

        <footer className={Footer}>
          <p>Powered by</p>
          <span className={Logo}>
            <Image src={hiltonLogo} alt="Hilton Logo" />
          </span>
        </footer>
      </div>
    </div>
  );
}
