import React from "react";
import Profile from "../assets/profile.png"


function About() {
  return (
    <div
      name="about"
      className="w-full h-full bg-[#0e0e0e] text-gray-300 md:m-auto"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#98CE00]">
              <i class="fa-solid fa-user"></i> About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-x4 font-bold">
            <p className="inline border-b-2 border-[#536578]">
              My Education <br />
            </p>
            <br />

            <div className="bg-slate-700 rounded-lg  p-5 mb-4 shadow-md">
              <h3 className="text-x4 font-bold mb-2">IIIT Naya Raipur</h3>
              <p className=" mb-2 text-gray-500 ">B.Tech in Computer Science and Engineering</p>
              <p className="text-gray-500">From Aug 2017 - July 2021 
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-5 mb-4 shadow-md">
              <h3 className="text-x4 font-bold mb-2">Brilliant Public School</h3>
              <p className="mb-4 text-gray-500">All India Senior School Certificate Examination (AISSCE)</p>
              <p className="text-gray-500">From 2014 - 2016
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-5 shadow-md">
              <h3 className="text-x4 font-bold mb-2">Carmel Convent School</h3>
              <p className="text-gray-500 mb-4">All India Secondary School Examination (AISSE)</p>
              <p className="text-gray-500">From 2003-2014
              </p>
            </div>
          </div>

          <div className="container">
            <div className="pt-10 sm:text-left">
              <p className="text-2xl font-bold inline border-b-2 color text-[#8892b0]"></p>
              <div className=" rounded-md hover:shadow-[#6BD425] hover:scale-110 duration-700 hover:duration-700 transition-all hover:transition-all">
                <img src={Profile} alt="" className=" w-100 mx-auto drop-shadow-lg" />
                <p className="my-4 font-semibold"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
