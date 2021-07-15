import Head from "next/head";

import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simurgh Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <div className="max-w-screen-xl m-auto">
        <Menu />
        <About />
        <Location />
        <Footer />
      </div>
    </div>
  );
}
