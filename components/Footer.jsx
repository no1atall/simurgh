import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF  } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <section id="Location" className=" flex flex-col my-20 ">
      <div className="flex flex-row w-full px-4  pb-8">
        <div className="w-1/2 flex text-3xl font-bold ">
          <div className="w-1/2 flex flex-col">
            <div className="mb-20 hover:text-gray-500">
              <Link href="/">Home</Link>
            </div>
            <div className="hover:text-gray-500">
              <Link href="#Menu">Menu</Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="mb-20 hover:text-gray-500">
              <Link href="/order">Order Now</Link>
            </div>
            <div className="hover:text-gray-500">
              <Link href="#About">About Us</Link>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <div className=" w-1/2 text-3xl font-bold">
            <h4 className="mb-2">Address</h4>
            <address className="not-italic mb-8 text-xl font-normal">
              12930 Yonge St
              <br />
              Richmond Hill
              <br /> ON L4E 3K2
            </address>
            <h4 className="mb-2">Contact Us</h4>
            <a href="tel:12892346622" className="underline text-xl font-normal">
              Call us at (289)-234-6622{" "}
            </a>
          </div>
          <div className="text-3xl font-bold">
            <h4 className="mb-2">Weekdays</h4>
            <p className="text-xl font-normal">Mon: Closed</p>
            <p className="text-xl font-normal mb-14">Tue - Fri: 12pm - 10pm</p>
            <h4 className="mb-5">Weekends</h4>
            <p className="text-xl font-normal">Sat - Sun: 12pm - 10pm</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full text-xl ">
        <div className="w-1/2 ">
          <p>Copywrite ©2021 Created by Ian Vicherek</p>
        </div>
        <div className="mx-auto cursor-pointer">
          <Link href="#Location">
            <i class="fab fa-facebook"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
