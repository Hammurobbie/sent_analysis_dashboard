import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  NavLeft,
  NavRight,
  NavRightSpeaking,
  Nav,
} from "../styles/dashBoard.module.scss";
import vintageHiltonLogo from "../images/vintage_hilton_logo_rainbow.png";
import ahnuld from "../images/ahnuld.webp";
import luhningComputuh from "../audio/uhLuhningComputah.mp3";

const NavBar = () => {
  const [ahnuldSpeaks, setAhnuldSpeaks] = useState(null);

  useEffect(() => {
    setAhnuldSpeaks(new Audio(luhningComputuh));
  }, []);

  const handleAhnuldSpeaks = () => ahnuldSpeaks.play();

  return (
    <nav className={Nav}>
      <div className={NavLeft}>
        <Image priority src={vintageHiltonLogo} alt="Vintage Hilton Logo" />
        <p>Hilton Sentiment Analysis Dashboard</p>
      </div>
      <div
        className={
          ahnuldSpeaks?.played?.length && !ahnuldSpeaks?.ended
            ? NavRightSpeaking
            : NavRight
        }
      >
        <Image onClick={handleAhnuldSpeaks} src={ahnuld} alt="Profile" />
      </div>
    </nav>
  );
};

export default NavBar;
