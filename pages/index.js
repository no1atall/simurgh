import Head from "next/head";

import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simurgh Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Navbar />
      <Hero />
      <div className="max-w-screen-xl m-auto">
        <Menu />
        {/* <About />
        <Footer /> */}
      </div>
    </div>
  );
}
