const Hero = () => {
  return (
    <main className="bg-hero-image bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center text-white text-3xl md:text-5xl lg:text-6xl text-shadow-xl font-extrabold">
      <h1 className="">Fresh Persian Cuisine</h1>
      <h2>Made For You</h2>
      <div className=" text-2xl mt-8 flex flex-col md:flex-row ">
        <button
          className="font-bold text-shadow-xl w-48 mx-8 my-2 border-2 px-4 py-2 hover:text-gray-900
        hover:border-gray-900"
        >
          <a href="tel:12892346622">Order Now</a>
        </button>
        <button
          className="font-bold text-shadow-xl w-48 mx-8 my-2 border-2 px-4 py-2 hover:text-gray-900
        hover:border-gray-900"
        >
          Find Us
        </button>
      </div>
    </main>
  );
};

export default Hero;
