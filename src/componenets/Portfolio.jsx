import atlanticImg from "../assets/atlanticGlamping.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="mt-12">
      <h1 className="text-stone-50 text-5xl text-center font-semiBold mb-12">
        Portfolio
      </h1>
      <div>
        <div className=" p-8 flex justify-center flex-col items-center space-x-20">
          {/* <img
            className="w-[600px] h-[400px] rounded-sm"
            src={atlanticImg}
            alt="image"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
