import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo2.png';
import ResumePDF from '../assets/Resume.pdf';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 md:px-20 bg-[#0e0e0e] text-gray-300 border-b border-[#1b1b1b] z-20">
      <div className="w-[210px]">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo" className="cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-6">
        {['home', 'about', 'contact', 'skills', 'work'].map((section) => (
          <li key={section} className="hover:text-[#25c2d4f7] hover:scale-110 duration-700">
            <Link to={section} smooth={true} duration={500}>
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <div
        onClick={handleClick}
        className="md:hidden cursor-pointer hover:text-gray-500 hover:scale-110 duration-700 text-[24px]"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#0e0e0e] flex-col justify-center items-center gap-y-6 text-4xl`}
      >
        {['home', 'about', 'contact', 'skills', 'work'].map((section) => (
          <li key={section} className="hover:text-[#25c2d4f7] hover:scale-110 duration-700">
            <Link onClick={handleClick} to={section} smooth={true} duration={500}>
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="fixed top-[35%] left-0 w-full flex justify-center items-center md:fixed md:left-0 md:top-[35%] z-10">
        <ul className="flex w-full justify-between md:flex-col md:items-start">
          {[
            {
              href: 'https://www.linkedin.com/in/priyansh-bhardwaj-05959817b/',
              label: 'LinkedIn',
              icon: <FaLinkedin className="text-[30px]" />,
              bgColor: 'bg-blue-600',
            },
            {
              href: 'https://github.com/priyans619',
              label: 'GitHub',
              icon: <FaGithub className="text-[30px]" />,
              bgColor: 'bg-[#333333]',
            },
            {
              href: 'mailto:priyansh.2b@gmail.com',
              label: 'Email',
              icon: <HiOutlineMail className="text-[30px]" />,
              bgColor: 'bg-[#945353]',
            },
            {
              href: ResumePDF,
              label: 'Resume',
              icon: <BsFillPersonLinesFill className="text-[30px]" />,
              bgColor: 'bg-[#25c2d4f7]',
              download: true,
            },
          ].map(({ href, label, icon, bgColor, download }, index) => (
            <li
              key={label}
              className={`flex justify-center items-center w-1/4 h-[60px] ${bgColor} md:w-[160px] md:h-[60px] md:ml-[-100px] md:hover:ml-[-10px] md:absolute md:py-1 duration-700`}
              style={{ top: `${index * 60}px` }}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={href}
                target={download ? '_self' : '_blank'}
                download={download}
                rel="noreferrer"
                aria-label={label}
              >
                <span className="hidden md:flex">{label}</span>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
