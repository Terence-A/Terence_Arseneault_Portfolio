import atlanticImg from "../assets/atlanticGlamping.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="text-stone-50 text-7xl text-center font-semiBold mb-12">
        Portfolio
      </h1>
      <div className="bg-stone-800 p-8 mx-4 rounded-lg">
        <div className="bg-stone-950 p-8 rounded-xl flex justify-center space-x-20">
          <img
            className="w-[600px] h-[400px] rounded-xl"
            src={atlanticImg}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
