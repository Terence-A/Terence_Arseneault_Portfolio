import photoImg from "../assets/photo.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center md:justify-between items-center px-4 xl:px-36 py-12 md:py-36 shadow-lg shadow-stone-50  ">
      <div className="flex flex-col ">
        <h1 className="text-stone-50 text-center text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 xl:mb-8 tracking-wider">
          Full Stack Web Developer
        </h1>
        <TypeAnimation
          className="text-stone-300 font-bold text-center h-20 text-xl xl:text-4xl "
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I specialize in Front End Web Development!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I specialize in React JS!",
            1000,
            "I specialize in Reponsive design!",
            1000,
            "I specialize in Agile Development!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />

        <div className="flex flex-wrap justify-center mt-8 md:mt-20 gap-8">
          <a href="#contact">
            <button className="bg-amber-700 text-stone-50  xl:text-2xl rounded-full w-32 lg:w-48 py-4 hover:bg-amber-800 hover:font-bold">
              Contact Me
            </button>
          </a>
          <a href="/#portfolio">
            <button className="border border-amber-700 rounded-full w-32 lg:w-48 py-4 xl:text-2xl text-amber-700 hover:text-stone-50 hover:bg-amber-800 hover:font-bold ">
              Portfolio
            </button>
          </a>
        </div>
      </div>
      <img
        className="size-[200px] rounded-full lg:size-[450px] xl:size-[650px]  xl:rounded-sm mt- "
        src={photoImg}
        alt="photo image"
      />
    </div>
  );
};

export default Hero;
