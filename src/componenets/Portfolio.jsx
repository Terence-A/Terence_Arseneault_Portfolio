import { useState } from "react";
import atlanticImg from "../assets/atlanticGlamping.jpeg";

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
      <div className="">
        <div className=" p-8 flex justify-around">
          <div className="rounded-md ">
            <img
              className="w-[700px] h-[500px]  rounded-2xl"
              src={atlanticImg}
              alt="image"
            />
          </div>
          <div className="w-[500px] flex flex-col mt-8 ">
            <div>
              <h1 className="text-stone-50 text-5xl font-bold mb-8 mr-20">
                Atlantic Glamping
              </h1>
            </div>
            <div className="">
              <ul className="flex space-x-8 mb-12">
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
                    onClick={() => handleSelect("assigned")}
                    className={
                      selected === "assigned" ? btnSelectedCss : btnCss
                    }
                  >
                    Assigned
                  </button>
                </li>
              </ul>
              {selected === "description" && (
                <p className="text-stone-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  fugiat vitae repellendus dolore cum autem debitis accusamus
                  aliquid laboriosam, fugit architecto perferendis sapiente sed
                  hic facere fuga beatae. Labore, inventore?
                </p>
              )}
              {selected === "tools" && <p className="text-stone-400">Tools</p>}
              {selected === "assigned" && (
                <p className="text-stone-400">Assigned</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
