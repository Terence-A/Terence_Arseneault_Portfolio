import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-stone-950 text-stone-50 px-4  flex justify-around items-center py-10">
        <h1 className="  lg:text-3xl font-semibold  w-80">
          Terence Arseneault <span className="md:hidden">&#169;</span>
        </h1>
        <p className="hidden md:flex">
          &#169; 2024 Terence Arseneault. All Rights Reserved{" "}
        </p>
        <div className="flex justify-end gap-2 lg:gap-8 w-80">
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

          <a href="https://github.com/Terence-A" target="blank">
            <img
              className="hover:opacity-90 size-8 cursor-pointer "
              src={githubImg}
              alt="github icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
