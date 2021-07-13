import Link from "next/link";
import Image from "next/image";

import Logo from "../images/Simurgh_Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white h-24 w-screen fixed flex">
      <div className="w-56 ml-8 flex items-end mb-2">
        <Link href="/">
          <Image src={Logo} alt="Simurgh Restaurant" />
        </Link>
      </div>
      <ul className="flex items-end text-3xl justify-between px-32 w-full ">
        <li >
          <Link href="/order">Order Now</Link>
        </li>
        <li >
          <Link href="#Menu">Menu</Link>
        </li>
        <li >
          <Link href="#About">About Us</Link>
        </li>
        <li >
          <Link href="#Location">Find Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
