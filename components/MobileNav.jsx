import React, { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav id="mobile-nav">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/order">Order Now</Link>
        </li>
        <li>
          <Link href="#Menu">Menu</Link>
        </li>
        <li>
          <Link href="#About">About Us</Link>
        </li>
        <li>
          <Link href="#Location">Find Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
