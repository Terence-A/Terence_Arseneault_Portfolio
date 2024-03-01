import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-stone-950 text-stone-50 flex justify-around items-center py-10">
        <h1 className="text-3xl font-semibold w-80">Terence Arseneault</h1>
        <p>&#169; 2024 Terence Arseneault. All Rights Reserved </p>
        <div className="flex justify-end gap-8 w-80">
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
