import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { Link } from "react-scroll/modules";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineClose,
} from "react-icons/ai";
import logo from "../assets/logowhite.png";

const NavBar = () => {
  const [current, setcurrent] = useState("About me");
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };
  const names: string[] = [
    "About_Me",
    "My_Resume",
    "My_Projects",
    "Not_Work_Related",
    "Contact_Me",
  ];
  return (
    <div>
      <ul className="fixed inset-x-0 top-0 z-50 hidden p-5 md:flex">
        {names.map((name) => {
          return name !== current ? (
            <Link
              href={name}
              className="hover:cursor-pointer"
              onClick={() => setcurrent(name)}
            >
              <li
                className="px-6 py-1 font-normal xl:text-3xl lg:text-2xl md:text-sm text-orange1 font-Prompt"
                id={name}
              >
                {name.split("_").join(" ")}
              </li>
            </Link>
          ) : (
            <Link
              // activeClass="active"
              // to={name}
              // spy={true}
              // smooth={true}
              // offset={0}
              // duration={50}
              href={name}
              className="hover:cursor-pointer"
              onClick={() => setcurrent(name)}
            >
              <li
                className="px-6 py-1 text-3xl font-normal text-white rounded-full bg-pink2 font-Prompt"
                id={name}
              >
                {name.split("_").join(" ")}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="fixed z-50 flex justify-end pt-6 cursor-pointer right-6 md:hidden align-left ">
        <GiHamburgerMenu
          size={70}
          className=" text-orange1"
          onClick={() => handlenav()}
        />
      </div>
      <div
        className={
          nav
            ? " md:hidden fixed top-0 left-0 z-50 w-full inset-0  bg-darkblue3/80"
            : ""
        }
      >
        <div
          className={
            nav
              ? "inset-0 h-full  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-gradient-to-r from-orange1 to-pink2 ease-in duration-500"
              : "h-screen fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-gradient-to-r from-orange1 to-pink2 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full px-6 py-4 ">
            <Image
              height={60}
              width={60}
              src={logo}
              alt="logo Agustina Di Nucci"
            />
            <div className="cursor-pointer">
              <AiOutlineClose
                size={40}
                className="text-white"
                onClick={() => handlenav()}
              />
            </div>
          </div>
          <div className="my-4 border-b border-white">
            <p className="px-3 py-2 text-4xl font-semibold text-white">
              Agustina Di Nucci
            </p>
            <p className="px-3 py-2 text-2xl font-normal text-white">
              Full Stack Web Developer
            </p>
          </div>
          <div className="flex flex-col justify-between py-8 h-3/5 ">
            <ul className="flex flex-col justify-between mb-2 uppercase">
              {names.map((name) => {
                return (
                  <Link href={name} onClick={() => setcurrent(name)}>
                    <li
                      className="px-8 py-3 text-2xl font-normal text-white hover:cursor-pointer font-Prompt"
                      id={name}
                    >
                      {name.split("_").join(" ")}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div className="pl-5 ">
              <p className="text-2xl font-semibold tracking-widest text-center text-white uppercase">
                Let's Connect
              </p>
              <div className="flex items-center justify-center pt-4 space-x-8">
                <a href="https://www.linkedin.com/in/agustina-dinucci/">
                  <AiFillLinkedin className="w-12 h-12 text-white cursor-pointer" />
                </a>
                <a href="https://github.com/dinucciagus">
                  <AiFillGithub className="w-12 h-12 text-white cursor-pointer" />
                </a>
                <button
                  onClick={() => window.open("mailto:dinucciagus@gmail.com")}
                >
                  <AiFillMail className="w-12 h-12 text-white cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
