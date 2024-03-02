import { useState } from "react";
import portfolioData from "../portfolioData";

const Portfolio = () => {
  const [selected, setSelected] = useState("description");

  const btnCss =
    "text-stone-400 text-xl font-bold hover:text-amber-600 hover:underline hover:underline-amber-600";
  const btnSelectedCss =
    "text-amber-600 text-xl font-bold hover:text-amber-600 underline ";

  const handleSelect = (listSelection) => {
    setSelected(listSelection);
  };

  return (
    <section id="portfolio" className="pt-24 px-20">
      <h1 className="text-stone-50 text-5xl  font-bold mb-12">Portfolio</h1>
      <div className="pb-20">
        <div className=" p-8 flex justify-around mb-8">
          <div className="rounded-md ">
            <img
              className="w-[700px] h-[500px]  rounded-2xl"
              src={portfolioData[0].image}
              alt="image"
            />
          </div>
          <div className="w-[500px] flex flex-col mt-8 ">
            <div className="flex items-center ">
              <h1 className="text-stone-50 text-4xl font-bold  mr-20">
                {portfolioData[0].title}
              </h1>
              <a
                href="https://github.com/Terence-A/Atlantic-Glamping"
                target="blank"
              >
                <button className="bg-amber-700 text-stone-50 p-2 rounded-md animate-bounce hover:bg-amber-800">
                  Deploy
                </button>
              </a>
            </div>
            <div className="">
              <ul className="flex space-x-8 mb-12 mt-8">
                <li>
                  <button
                    onClick={() => handleSelect("description")}
                    className={
                      selected === "description" ? btnSelectedCss : btnCss
                    }
                  >
                    Description
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSelect("tools")}
                    className={selected === "tools" ? btnSelectedCss : btnCss}
                  >
                    Tools
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSelect("role")}
                    className={selected === "role" ? btnSelectedCss : btnCss}
                  >
                    Role
                  </button>
                </li>
              </ul>
              {selected === "description" && (
                <p className="text-stone-400 text-lg">
                  {portfolioData[0].description}
                </p>
              )}
              {selected === "tools" && (
                <ul className="text-stone-400 text-lg list-disc ml-4 ">
                  {portfolioData[0].tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              )}
              {selected === "role" && (
                <ul className="text-stone-400 text-lg list-disc ml-4">
                  {portfolioData[0].role.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-4">
          {portfolioData.map((title, index) => (
            <li key={index}>
              <button className="border border-amber-700 w-48 py-4 text-lg font-bold text-amber-700 rounded-lg  hover:bg-amber-700 hover:text-stone-50">
                {title.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
