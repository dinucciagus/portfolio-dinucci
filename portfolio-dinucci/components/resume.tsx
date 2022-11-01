import { useState } from "react";
import Addedvalue from "./addedvalue";
import Education from "./education";
import Sidebar from "./SideBar";
import Skills from "./Skills";
import Work from "./workexp";
import Soft from "./soft";
const Resume = () => {
  const [activeItem, setActiveItem] = useState<string>("Tech Skills");
  return (
    <div className="h-screen ">
      <div
        id="My_Resume"
        className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-30 xl:px-48 sm:px-20 md:px-32 "
      >
        <div className="col-span-12 px-4 text-center bg-white lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col items-center col-span-12 bg-white lg:col-span-9 rounded-2xl">
          <div className="flex flex-col justify-between w-full p-2 px-5 mx-5 md:mx-10 md:flex-row">
            <span className="text-lg font-bold border-b-4 text-orange1 border-pink2 ">
              {activeItem}
            </span>
            <div className="flex space-x-2 text-sm font-medium sm:text-md md:text-lg lg:space-x-8 text-darkblue3">
              {activeItem !== "Tech Skills" && (
                <button onClick={() => setActiveItem("Tech Skills")}>
                  <span className=" hover:text-orange1">Tech Skills</span>
                </button>
              )}
              {activeItem !== "Soft Skills" && (
                <button onClick={() => setActiveItem("Soft Skills")}>
                  <span className=" hover:text-orange1">Soft Skills</span>
                </button>
              )}
              {activeItem !== "Education" && (
                <button onClick={() => setActiveItem("Education")}>
                  <span className=" hover:text-orange1">Education</span>
                </button>
              )}
              {activeItem !== "Work Experience" && (
                <button onClick={() => setActiveItem("Work Experience")}>
                  <span className=" hover:text-orange1">Work Experience</span>
                </button>
              )}
              {activeItem !== "Added Value" && (
                <button onClick={() => setActiveItem("Added Value")}>
                  <span className=" hover:text-orange1">Added Value</span>
                </button>
              )}
            </div>
          </div>
          <div className="flex justify-center h-full align-center">
            {activeItem === "Tech Skills" ? (
              <Skills />
            ) : activeItem === "Soft Skills" ? (
              <Soft />
            ) : activeItem === "Education" ? (
              <Education />
            ) : activeItem === "Work Experience" ? (
              <Work />
            ) : (
              <Addedvalue />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
