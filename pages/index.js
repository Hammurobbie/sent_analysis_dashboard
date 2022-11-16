import Head from "next/head";
import Image from "next/image";
import { Footer, Main, Logo } from "../styles/dashBoard.module.scss";
import hiltonLogo from "../images/hilton_logo_blue.png";

import NavBar from "../components/NavBar";
import Results from "../components/Results";

export default function Home() {
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
        <Results />
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
