import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
const Header = () => {
  return (
    <header className="sticky top-0">
      <nav className=" sticky top-0 bg-stone-950 shadow-md shadow-stone-50/10 px-12  py-4 flex justify-between items-center">
        <a href="#">
          <h5 className="h5 text-stone-50 font-bold text-5xl  w-96 cursor-pointer hover:text-stone-200">
            Terence Arseneault
          </h5>
        </a>
        <div>
          <ul className="flex space-x-12 text-xl uppercase">
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

            <li className="text-stone-50 hover:text-stone-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-4 w-96 justify-end">
            <li>
              <img
                className="hover:opacity-90 size-8 cursor-pointer"
                src={linkedinImg}
                alt="linkedIn icon"
              />
            </li>
            <li>
              <img
                className="hover:opacity-90 size-8 cursor-pointer "
                src={githubImg}
                alt="github icon"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
