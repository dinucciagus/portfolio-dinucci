import soft1 from "../assets/soft1.png";
import soft2 from "../assets/soft2.png";
import soft3 from "../assets/soft3.png";
import soft4 from "../assets/soft4.png";

import style from "./styles/About.module.css";
import next from "next";
import Image from "next/image";

const Soft = () => {
  return (
    <div id="skills">
      <div className="m-5 rounded-xl bg-gradient-to-r from-orange05 to-pink2 drop-shadow-lg">
        <div className="flex flex-col justify-center w-full align-center">
          <h3 className="mt-3 mb-2 text-2xl text-center text-white font-semi-bold font-Prompt">
            Soft Skills{" "}
          </h3>
          <div>
            <p className="mt-3 mb-2 ml-6 text-lg text-left text-white font-semi-bold font-Prompt">
              The 4 soft skills which I feel identify with are the following:
            </p>
          </div>
        </div>
        <div className="flex p-6 mx-auto ">
          <div className="flex flex-col items-center justify-center h-full p-2 m-1 bg-white p-4flex rounded-2xl">
            <Image width={"80px"} height={"80"} src={soft1} />
            <h3 className="mt-2 font-bold text-center text-md">
              user centered
            </h3>
            <p className="h-full text-center">
              Working as an Architect taught me to recognize the User's needs
              and to put them always at the center.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full p-2 m-1 bg-white rounded-2xl">
            <Image width={"80px"} height={"80px"} src={soft4} />
            <h3 className="mt-1 font-bold text-center text-md">
              Collaborative
            </h3>
            <p className="text-center">
              I strongly belive that collaborative work is the best way to
              achieve success and create a strong team.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full p-2 m-1 bg-white rounded-2xl">
            <Image width={"80px"} height={"80px"} src={soft2} />
            <h3 className="mt-1 font-bold text-center text-md">Creative</h3>
            <p className="text-center">
              I like solving problems, finding interesting ways to approach
              tasks and using my imagination to generate new ideas.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center h-full p-2 m-1 bg-white rounded-2xl">
            <Image width={"80px"} height={"80px"} src={soft3} />
            <h3 className="mt-1 font-bold text-center text-md">
              Positive attitude
            </h3>
            <p className="text-center">
              I am an Optimism, maintaining a positive mindset it's what helps
              me overcame problems and mantain a confortable enviroment with the
              team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soft;
