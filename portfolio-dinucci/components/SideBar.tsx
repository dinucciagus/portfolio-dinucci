import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Sidebar = () => {
  return (
    <div>
      <div className="flex justify-center item-center ">
        <img
          className="rounded-full "
          src="https://drive.google.com/uc?id=12yIUs3DYzOf3yI4JTm2mplDELwX7ljnx"
          alt="avatar picture of Agustina Di Nucci"
        />
      </div>
      <h3 className="my-4 text-xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange1 to-pink2 font-Prompt">
        <span>Agustina </span>
        Di Nucci
      </h3>
      <p>FullStack Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-gradient-to-r from-orange1 to-pink2"
        href=""
        download="name"
      >
        Download Resume
      </a>
      {/* icons social */}
      <div className="flex justify-around w-9/12 my-5 text-orange1 md:w-full mx:auto">
        <a href="https://www.linkedin.com/in/agustina-dinucci/">
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://github.com/dinucciagus">
          <AiFillGithub className="w-6 h-6 cursor-pointer" />
        </a>
        <button onClick={() => window.open("mailto:dinucciagus@gmail.com")}>
          <AiFillMail className="w-6 h-6 cursor-pointer" />
        </button>
      </div>
      <div
        className="py-4 my-5 bg-orange05"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span className="font-medium ">Turin, Italy</span>
        </div>

        <h3 className="flex items-center justify-center mt-2 text-xl font-medium ">
          Languages
        </h3>
        <p className="flex items-center justify-center mt-1 space-x-2">
          <span className="rounded-full fi fi-es "></span>
          <p>Spanish : native speaker</p>
        </p>
        <p className="flex items-center justify-center mt-1 space-x-2">
          <span className="rounded-full fi fi-gb"></span>{" "}
          <p>English : Proficient C2</p>
        </p>
        <p className="flex items-center justify-center mt-1 space-x-2">
          <span className="rounded-full fi fi-it"></span>{" "}
          <p>Italian : Intermediate B2</p>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
