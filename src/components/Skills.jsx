import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-full bg-[#0e0e0e] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#6BD425]">
            <i class="fa-solid fa-screwdriver-wrench"></i> Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">Html</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">Css</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={Javascript} alt="Javascript icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">Javascript</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={ReactImg} alt="React icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">React</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={GitHub} alt="Github icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">GitHub</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={Node} alt="Node icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">Node Js</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={Mongo} alt="Firebase icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">Mongo DB</p>
          </div>
          <div className="pt-4 rounded-md bg-black border border-white hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-[#6BD425] hover:scale-105 duration-700 hover:duration-700 transition-all hover:transition-all">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto drop-shadow-lg" />
            <p className="my-4 font-semibold text-white">Tailwind</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
