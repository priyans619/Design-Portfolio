import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {SiHiveBlockchain, SiReact,SiNodedotjs,SiSass, SiVite, SiTailwindcss, SiCss3, SiHtml5, SiJavascript} from 'react-icons/si';

import { Link } from "react-scroll";

import crowdFunding from '../assets/projects/crowdfunding.png';
import movieApp from '../assets/projects/movieApp.png';
import musicApp from '../assets/projects/musicApp.png';
import samplePortfolio from '../assets/projects/portfolio.png';
import peterAndDragon from '../assets/projects/peterNdragon.png';
import portfolio from '../assets/projects/myportfolio.png';


function Work() {
  return (
    <div name="work" className="w-full md:h-full text-gray-300 bg-[#0e0e0e] md:mt-[12%]">
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#6BD425]'>
            <i class="fa-solid fa-briefcase pr-2"/>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          

        {/* Crowdfunding */}
        <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${crowdFunding})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/priyans619/Crowdfunding-Platform" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Crowdfunding platform</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 lg:line-clamp-5'>Developed a blockchain-based crowdfunding platform for smart contracts, allowing users to create campaigns.Integrated MetaMask for Ethereum transactions.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#32ca65] font-semibold flex items-center gap-0.5'><SiNodedotjs />NodeJs</span>
                <span className='text-[#6f25a1] font-semibold flex items-center gap-0.5'><SiHiveBlockchain />Thirdweb</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://crowdfunding-platform-three.vercel.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>


          {/* Movie App */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${movieApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/priyans619/Movie-mania" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Moviemania App</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 lg:line-clamp-5'>A react based movie application where you can search millions of movies and TV shows made using TBDB API for fetching data.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#32ca65] font-semibold flex items-center gap-0.5'><SiNodedotjs />NodeJs</span>
                <span className='text-[#c740aa] font-semibold flex items-center gap-0.5'><SiSass />Scss</span>
              </div>
            </div>
            <a href="https://movie-mania-hazel.vercel.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Music App */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${musicApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
              <a href="https://github.com/priyans619/Songify-Music-App" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Songify-Music</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>A Spotify inspired application with a homepage, a music player, search functionality, song exploration features, local music search, global top charts.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://songify-music-app.vercel.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Professional Portfolio */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-[103%] h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
              <a href="https://github.com/priyans619/My-Portfolio-1" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>My Portfolio</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>A website showcasing a professional portfolio of my recent works in application and web development, using various technologies.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://my-portfolio-1-three.vercel.app/"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>
          

          {/* Dragon Game*/}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${peterAndDragon})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/priyans619/Peter-and-dragon/" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Run and Escape</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>A web game which runs in browser where you save your player from attacking dragon.Currently working in Three.js for better 3D experience.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#f5f53b] font-semibold flex items-center gap-0.5'>< SiJavascript/>Javascript</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
              </div>
            </div>
            <a href="peter-and-dragon.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Sample Portfolio */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${samplePortfolio})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/priyans619/Portfolio/" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Sample Portfolio</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>A responsive portfolio made using pure Html/css includes all the sections like projects, skills, contacts and all details which interviewer looks for.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
              <span className='text-[#f5f53b] font-semibold flex items-center gap-0.5'>< SiJavascript/>Javascript</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
              </div>
            </div>
            <a href="https://sample-portfoli90.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Work
