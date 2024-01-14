import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0e0e0e] md:px-10">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

        <p className="text-[#25c2d4f7]">Hi Good people !</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Priyansh B.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Fullstack Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-[630px]">
          I'm skilled in web creation and design using React, including layout using tools such as Figma. Able to provide guidance and employ agile methodologies like Scrum. Proficient in creating wireframes and flowcharts to ensure optimal user experience.For better understanding my journey and thoughts lets see my work and experience.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500} delay={300} className="flex items-center">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#25c2d4f7] hover:border-[#6BD425] hover:text-[#0e0e0e] font-medium rounded-md duration-700 z-10">
              Let's See Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        <div className="shadow-inset-white bg-cover animate-myAnimation bg-center bg-no-repeat w-[85%] h-[50%] md:w-[70%] lg:w-[40%] md:h-[60%] absolute z-0 -mt-20 opacity-50" />
      </div>
    </div>
  );
}

export default Home;
