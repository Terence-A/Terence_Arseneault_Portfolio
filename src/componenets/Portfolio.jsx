import { useState } from "react";
import portfolioData from "../portfolioData";

const Portfolio = () => {
  const [selected, setSelected] = useState("description");
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  const btnCss =
    "text-stone-400 text-xl font-bold hover:text-amber-600 hover:underline hover:underline-amber-600";
  const btnSelectedCss =
    "text-amber-600 text-xl font-bold hover:text-amber-600 underline ";

  const portFolioBtn =
    "bg-stone-800 border border-amber-700 w-48 py-4 text-lg font-bold text-amber-700 rounded-lg  hover:bg-amber-700 hover:text-stone-50";

  const portFolioBtnSelected =
    "bg-amber-700 border border-amber-700 w-48 py-4 text-lg font-bold text-stone-50 rounded-lg  hover:bg-amber-600 hover:text-stone-50";

  const handleSelect = (listSelection) => {
    setSelected(listSelection);
  };

  const handlePorfolioIndex = (portIndex) => {
    setPortfolioIndex(portIndex);
  };

  return (
    <section id="portfolio" className="pt-8 lg:pt-24 px-2 lg:px-20 ">
      <h1 className="text-stone-50 text-3xl lg:text-5xl   font-bold mt-12 xl:mt-20 mb-8 lg:mb-12 border-b border-b-stone-50/30 pb-2">
        Portfolio
      </h1>
      <div className="pb-20">
        <div className="flex-col flex xl:flex-row items-center xl:items-start justify-between py-8 xl:px-36 mb-8 gap-12">
          <div className="rounded-md mb-8 ">
            <img
              className="w-[500px] lg:w-[600px] lg:h-[400px]  xl:w-[700px] xl:h-[500px]  rounded-2xl"
              src={portfolioData[portfolioIndex].image}
              alt="image"
            />
          </div>
          <div className="w-[300px] lg:w-[600px] flex flex-col my-2 ">
            <div className="flex items-center ">
              <h1 className="text-stone-50 text-4xl font-bold  mr-20">
                {portfolioData[portfolioIndex].title}
              </h1>
              <a href={portfolioData[portfolioIndex].deploy} target="blank">
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
                  {portfolioData[portfolioIndex].description}
                </p>
              )}
              {selected === "tools" && (
                <ul className="text-stone-400 text-lg list-disc ml-4 ">
                  {portfolioData[portfolioIndex].tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              )}
              {selected === "role" && (
                <ul className="text-stone-400 text-lg list-disc ml-4">
                  {portfolioData[portfolioIndex].role.map((role, index) => (
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
              <button
                className={
                  title.id === portfolioIndex
                    ? portFolioBtnSelected
                    : portFolioBtn
                }
                onClick={() => handlePorfolioIndex(title.id)}
              >
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
