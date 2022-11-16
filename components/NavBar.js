import Image from "next/image";
import React from "react";
import { NavLeft, NavRight, Nav } from "../styles/dashBoard.module.scss";
import vintageHiltonLogo from "../images/vintage_hilton_logo_rainbow.png";
import ahnuld from "../images/ahnuld.webp";

const NavBar = () => {
  return (
    <nav className={Nav}>
      <div className={NavLeft}>
        <Image src={vintageHiltonLogo} alt="Vintage Hilton Logo" />
        <p>Hilton Sentiment Analysis Dashboard</p>
      </div>
      <div className={NavRight}>
        <Image src={ahnuld} alt="Profile" />
      </div>
    </nav>
  );
};

export default NavBar;
