import photoImg from "../assets/photo.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="flex justify-between items-center px-36 py-36 ">
      <div className="flex flex-col ">
        <h1 className="text-stone-50 text-6xl font-bold mb-8 tracking-wider">
          Full Stack Web Developer
        </h1>
        <TypeAnimation
          className="text-stone-300 font-bold text-center"
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
          style={{ fontSize: "2.2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="flex justify-center mt-20 space-x-8">
          <button className="bg-amber-700 text-stone-50 text-2xl rounded-full w-48 py-4 hover:bg-amber-800 hover:font-bold">
            Contact Me
          </button>
          <button className="border border-amber-700 rounded-full w-48 py-4 text-2xl text-amber-700 hover:text-stone-50 hover:bg-amber-800 hover:font-bold ">
            Portfolio
          </button>
        </div>
      </div>
      <img
        className="size-[600px]  rounded-3xl "
        src={photoImg}
        alt="photo image"
      />
    </div>
  );
};

export default Hero;
