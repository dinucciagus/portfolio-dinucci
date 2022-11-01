import Next from "../assets/next.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import postgres from "../assets/postgres.png";
import discord from "../assets/discord.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import html from "../assets/html.png";
import git from "../assets/git.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma.png";
import typeScript from "../assets/Typescript.png";
import scrum from "../assets/scrum.png";
import Github from "../assets/github.png";
import Jira from "../assets/jira.png";
import chakraui from "../assets/chakraui.png";
import tailwind from "../assets/Tailwind.png";
import materialui from "../assets/materialui.png";
import soft1 from "../assets/soft1.png";
import soft2 from "../assets/soft2.png";
import soft3 from "../assets/soft3.png";
import soft4 from "../assets/soft4.png";
import { RiTeamFill } from "react-icons/ri";

import style from "./styles/About.module.css";
import next from "next";
import Image from "next/image";

const Skills = () => {
  const stackName = [
    { img: javascript, name: "Javascript" },
    { img: typeScript, name: "TypeScript" },
    { img: Next, name: "Next.js" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: node, name: "Node.js" },
    { img: postgres, name: "PostgreSQL" },
    { img: html, name: "HTML5" },
    { img: git, name: "GIT" },
    { img: Github, name: "GitHub" },
    { img: postman, name: "Postman" },
    { img: scrum, name: "Scrum" },
    { img: figma, name: "Figma" },
    { img: Jira, name: "Jira" },
    { img: discord, name: "Discord" },
    { img: materialui, name: "Material UI" },
    { img: chakraui, name: "Chakra UI" },
    { img: tailwind, name: "TailWind CSS" },
  ];

  return (
    <div id="skills">
      <div className="items-center pb-2 mx-5 mt-1 mb-5 rounded-xl bg-gradient-to-r from-orange05 to-pink2 drop-shadow-lg">
        <div className="flex flex-col justify-center align-center ">
          <h3 className="mt-3 mb-2 text-2xl text-center text-white font-semi-bold font-Prompt">
            Tech Skills
          </h3>
          <div>
            <p className="mx-2 mt-3 mb-2 text-xl text-center text-white font-semi-bold font-Prompt">
              I am continually learning new tecnologies and emproving the ones I
              use. I will be adding new ones along the way.{" "}
            </p>
          </div>
        </div>
        <div className="grid items-center justify-center grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {stackName.map((e) => {
            return (
              <div
                key={e.name}
                className="flex flex-col items-center justify-center w-auto p-2 mx-4 my-2 bg-white shadow-lg rounded-3xl h-30 "
              >
                <Image
                  src={e.img}
                  width={"50px"}
                  height={"40px"}
                  className="object-scale-down"
                />
                <h4 className="font-normal text-darkblue3">{e.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
