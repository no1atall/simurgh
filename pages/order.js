import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Order() {
  return (
    <div>
      <Head>
        <title>Simurgh Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Navbar />
      <section className=" h-screen flex items-center justify-center flex-col">
        <h1>This page has not been built yet</h1>
        <Link href="/">
          <button className="border-2 p-2 mt-4">Return Home</button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
}
