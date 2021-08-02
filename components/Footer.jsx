import Link from "next/link";

const Footer = () => {
  return (
    <section id="Location" className=" flex flex-col my-20 ">
      <div className="flex flex-col-reverse md:flex-row w-full px-4  pb-16">
        <div className=" flex  md:w-1/2 text-xl  sm:text-3xl font-bold ">
          <div className="w-1/2 flex flex-col">
            <div className="mb-12  md:mb-20 hover:text-gray-500">
              <Link href="/">Home</Link>
            </div>
            <div className="hover:text-gray-500">
              <Link href="#Menu">Menu</Link>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="mb-12 md:mb-20 hover:text-gray-500">
              <Link href="tel:12892346622">Call Us</Link>
            </div>
            <div className="hover:text-gray-500">
              <Link href="#Location">Find Us</Link>
            </div>
          </div>
        </div>
        <div className="flex mb-16 md:mb-0 md:w-1/2 text-xl md:text-3xl">
          <div className=" w-1/2 font-bold">
            <h4 className="mb-2">Address</h4>
            <address className="not-italic mb-8 text-sm sm:text-lg md:text-xl font-normal">
              12930 Yonge St
              <br />
              Richmond Hill
              <br /> ON L4E 3K2
            </address>
            <h4 className="mb-2">Contact Us</h4>
            <a
              href="tel:12892346622"
              className="underline text-sm sm:tex-lg md:text-xl font-normal"
            >
              Call us at <br /> (289)-234-6622{" "}
            </a>
          </div>
          <div className="text-xl md:text-3xl font-bold">
            <h4 className="mb-2">Weekdays</h4>
            <p className="text-sm sm:text-lg md:text-xl font-normal">
              Mon: Closed
            </p>
            <p className="text-sm sm:text-lg md:text-xl font-normal mb-12 md:mb-14">
              Tue - Fri: 12pm - 10pm
            </p>
            <h4 className="mb-5 pt-1 ">Weekends</h4>
            <p className="text-sm sm:text-lg md:text-xl font-normal">
              Sat - Sun: 12pm - 10pm
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full text-xl px-4">
        <div className="w-1/2 text-lg sm:text-xl ">
          <p>Copyright ©2021 Created by Ian Vicherek</p>
        </div>
        <div className="mx-auto cursor-pointer">
          <Link href="#Location">
            <i className="fab fa-facebook"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
