import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import avatar from "../assets/avatar.png";

const Home = () => {
  return (
    <div className="inset-0 flex flex-col justify-center w-screen h-screen align-center">
      {/* <div className="absolute z-10 flex justify-center w-screen h-screen">
        <div className=" mt-96 ml-80">
          <button className="w-32 h-32 p-3 font-bold text-center text-white rounded-full drop-shadow-xl bg-gradient-to-r font-Prompt font-xl from-orange1 hover:from-pink2 hover:to-orange1 to-pink2 hover:h-40 hover:w-40 hover:text-darkblue3 hover:text-2xl ">
            About me
          </button>
        </div>
        <div className="mt-40 mr-40">
          <button className="w-32 h-32 p-3 font-bold text-center text-white rounded-full drop-shadow-xl bg-gradient-to-r font-Prompt font-xl from-orange1 hover:from-pink2 hover:to-orange1 to-pink2 hover:h-40 hover:w-40 hover:text-darkblue3 hover:text-2xl ">
            My resume
          </button>
        </div>
        <div className="mt-20 ">
          <button className="w-32 h-32 p-3 font-bold text-center text-white rounded-full drop-shadow-xl bg-gradient-to-r font-Prompt font-xl from-orange1 hover:from-pink2 hover:to-orange1 to-pink2 hover:h-40 hover:w-40 hover:text-darkblue3 hover:text-2xl ">
            Projects
          </button>
        </div>
        <div className="mt-40 ml-40">
          <button className="w-32 h-32 p-3 font-bold text-center text-white rounded-full drop-shadow-xl bg-gradient-to-r font-Prompt font-xl from-orange1 hover:from-pink2 hover:to-orange1 to-pink2 hover:h-40 hover:w-40 hover:text-darkblue3 hover:text-2xl ">
            Work not related
          </button>
        </div>
        <div className="mt-96 mr-80">
          <button className="w-32 h-32 p-3 font-bold text-center text-white rounded-full drop-shadow-xl bg-gradient-to-r font-Prompt font-xl from-orange1 hover:from-pink2 hover:to-orange1 to-pink2 hover:h-40 hover:w-40 hover:text-darkblue3 hover:text-2xl ">
            Contact me
          </button>
        </div>
      </div> */}

      <div className="relative inset-0 flex flex-col justify-center w-screen mt-[30vh] align-center ">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <Image src={avatar} height={"600px"} width={"600px"} />
        </div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 mt-28 w-480 top-1/2 left-1/2 h-480">
          <p className="mb-2 text-3xl font-medium text-center text-white font-Prompt">
            Hello! I am Agustina Di Nucci,
          </p>
          <p className="mb-2 text-xl font-medium text-center text-white font-Prompt">
            A Full Stack Web Developer
          </p>
          <p className="text-xl font-semibold text-center font-Prompt text-darkblue3">
            click a button to view more
          </p>
        </div>
      </div>
      <div className="absolute z-20 flex p-2 bottom-4 right-10">
        <a href="https://www.linkedin.com/in/agustina-dinucci/">
          <AiFillLinkedin className="w-12 h-12 ml-3 text-white cursor-pointer" />
        </a>
        <a href="https://github.com/dinucciagus">
          <AiFillGithub className="w-12 h-12 ml-3 text-white cursor-pointer" />
        </a>
        <button onClick={() => window.open("mailto:dinucciagus@gmail.com")}>
          <AiFillMail className="w-12 h-12 ml-3 text-white cursor-pointer" />
        </button>
      </div>

      {/* <div className="relative inset-0 flex flex-col justify-center w-screen align-center ">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-480 bg-orange1 top-1/2 left-1/2 h-480">
          <p className="p-40">Holiii</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
