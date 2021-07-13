import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Order() {
  return (
    <div>
      <Head>
        <title>Simurgh Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className=" h-screen flex items-center justify-center flex-col">
        <h1>This page has not been built yet</h1>
        <Link href="/">
          <button className="border-2 p-2 mt-4">Return Home</button>
        </Link>
      </section>
    </div>
  );
}
