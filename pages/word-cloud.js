import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Footer,
  MainWordCloud,
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

import SimpleCloud from '../components/WordCloudComponent';

export default function WordCloudPage() {
  
  return (
    <div>
      <Head>
        <title>Sentiment Analysis Word Cloud</title>
        <meta
          name="Sentiment Analysis Word Cloud"
          content="Sentiment Analysis DasWord Cloudhboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Wrapper}>
        <Image className={Overlay} alt="crt overlay" src={scanlines} />
        <Image className={Overlay2} alt="crt overlay" src={scanlines} />
        <Image className={Overlay3} alt="crt overlay" src={scanlines} />
        <Image className={Overlay4} alt="crt overlay" src={scanlines} />
        <main className={MainWordCloud}>
          <NavBar />
          <SimpleCloud/>
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
