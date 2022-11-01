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
import Adobe from "../assets/adobe.png";
import typeScript from "../assets/Typescript.png";
import scrum from "../assets/scrum.png";
import Github from "../assets/github.png";
import Jira from "../assets/jira.png";
import chakraui from "../assets/chakraui.png";
import tailwind from "../assets/Tailwind.png";
import materialui from "../assets/materialui.png";
import whoami from "../assets/whoami.png";
import style from "./styles/About.module.css";
import next from "next";
import Image from "next/image";

const About = () => {
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
    { img: Adobe, name: "Adobe XD" },
  ];

  return (
    <div
      id="About_Me"
      className="flex flex-col justify-center h-screen px-5 md:px-32 align-center xl:px-48"
    >
      <div className="flex justify-center px-5 pt-5 pb-5 bg-white shadow-lg h-1/2 align-cente rounded-2xl">
        <Image src={whoami} />
        <div className="flex flex-col mt-5 ">
          <h3 className="mb-5 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange1 to-pink2 font-Prompt">
            ¿Who am I ?
          </h3>

          <p className="mt-2 text-lg font-medium text-center">
            Hi! 😊 I am a full stack web developer with user centered thinking,
            but it wasn’t always like that...
          </p>
          <p className="mt-2 text-lg font-medium text-center">
            I am an architect as well and I worked in an architectural studio
            designing, planning and directing construction projects.
          </p>
          <p className="mt-2 text-lg font-medium text-center">
            As part of an IT family I have always been surrounded by developers,
            I started getting curious and amaze by this new world and today I
            can say that it has become my growing passion.
          </p>
          <p className="mt-2 text-lg font-medium text-center">
            Recently I relocated to Turin, Italy and it was the perfect
            opportunity for me to explore this tech side and that’s why I
            started to study software development. I’m really excited about the
            possibility of mixing my previous and newly acquired skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
