import Image from "next/image";


const About = () => {
  return (
    <section id="About" className=" h-screen">
      <div className=" lg:pt-32 flex mx-4">
        <div className=" max-w-xs ">
          <Image
            className="z-0"
            src="/AboutPicture.jpg"
            width={300}
            height={450}
            alt="Drink being poured at the bar"
          />
        </div>
        <div className="text-2xl w-4/5 mx-12">
          <p className="mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
        </div>
      </div>
      <div className="flex mx-4">
        
        <div className="text-2xl w-4/5 mr-12">
          <p className="mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            harum necessitatibus nihil corrupti adipisci voluptates tenetur
            maiores est cupiditate in, fuga temporibus soluta esse laboriosam
            veniam aperiam, nemo nostrum earum?
          </p>
          <p>
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
