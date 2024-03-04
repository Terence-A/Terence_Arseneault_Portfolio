import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import menuImg from "../assets/icons/menu.png";
import { useState } from "react";

const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropdown = () => {
    console.log("clicked");
    setDropdownActive(() => !dropdownActive);
  };

  console.log(dropdownActive);

  return (
    <header className="sticky top-0">
      <nav className=" sticky  top-0 bg-stone-950 shadow-md shadow-stone-50/10 px-12  py-4 flex justify-between  items-center">
        <a href="#">
          <h5 className="h5 text-stone-50 font-bold text-2xl sm:text-3xl xl:text-5xl  xl:w-96 cursor-pointer hover:text-stone-200">
            Terence Arseneault
          </h5>
        </a>
        <div className="hidden lg:flex">
          <ul className="flex space-x-12 text-xl uppercase ">
            <a href="#about">
              <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
                About
              </li>
            </a>
            <a href="#portfolio">
              <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
                Portfolio
              </li>
            </a>
            <a href="#contact">
              <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
                Contact
              </li>
            </a>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex space-x-4 xl:w-96 justify-end  ">
            <li>
              <a
                href="https://www.linkedin.com/in/terence-arseneault/"
                target="blank"
              >
                <img
                  className="hover:opacity-90 size-8 cursor-pointer"
                  src={linkedinImg}
                  alt="linkedIn icon"
                />
              </a>
            </li>
            <a href="https://github.com/Terence-A" target="blank">
              <li>
                <img
                  className="hover:opacity-90 size-8 cursor-pointer "
                  src={githubImg}
                  alt="github icon"
                />
              </li>
            </a>
          </ul>
        </div>
        <button
          className=" flex lg:hidden size-6 "
          onClick={() => handleDropdown()}
        >
          <img src={menuImg} alt="hamburger menu icon" />
        </button>
      </nav>
      {dropdownActive && (
        <div className="text-stone-50 py-12 bg-stone-950 lg:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <a href="#about" onClick={handleDropdown}>
              <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
                About
              </li>
            </a>
            <a href="#portfolio" onClick={handleDropdown}>
              <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
                Portfolio
              </li>
            </a>
            <a href="#contact" onClick={handleDropdown}>
              <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
                Contact
              </li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
