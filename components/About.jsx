import Image from "next/image";

const About = () => {
  return (
    <section id="About" className=" h-screen">
      <div className=" md:pt-32  flex flex-col items-center md:flex-row md:mx-4 md:py-4">
        <div className=" max-w-xs ">
          <Image
            className="z-0"
            src="/AboutPicture.jpg"
            width={300}
            height={450}
            alt="Drink being poured at the bar"
          />
        </div>
        <div className="text-md sm:text-xl lg:text-2xl w-4/5 mx-12">
          <p className="my-4 md:my-0 md:mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
          <p className="my-4 md:my-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row md:mx-4 md:py-4">
        <div className="text-md sm:text-xl lg:text-2xl w-4/5 md:mr-12">
          <p className="my-4 md:my-0 md:mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
          <p className="my-4 md:my-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
        </div>
        <div className=" max-w-xs ">
          <Image
            className="z-0"
            src="/AboutPicture.jpg"
            width={300}
            height={450}
            alt="Drink being poured at the bar"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
