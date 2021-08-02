import Link from "next/link";
import Image from "next/image";

import Logo from "../images/Simurgh_Logo.png";

const DesktopNav = () => {
  return (
    <nav className="bg-white h-24 w-screen z-10 fixed flex">
      <div className="w-56 ml-8 flex items-end mb-2">
        <Link href="/">
          <Image
            src={Logo}
            alt="Simurgh Restaurant"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <ul className="flex items-end text-2xl lg:text-3xl font-semibold justify-between px-12 xl:px-56 w-full uppercase ">
        <li className="hover:text-gray-500">
          <Link href="tel:12892346622">Call Us</Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="#Menu">Menu</Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="#Location">Find Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
